import { formatSlug, slugify } from '@/lib/utils'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import visit from 'unist-util-visit'
import path from 'path'
import MDXImage from './MDXImage'
import { Node } from 'unist'
const root = path.join(process.cwd(), 'src')
const loc = path.join(root, 'data')

export async function getAllFilesName(type: string) {
  return fs.readdirSync(path.join(loc, type))
}

const tokenClassNames = {
  tag: 'text-code-red',
  'attr-name': 'text-code-yellow',
  'attr-value': 'text-code-green',
  'class-name': 'text-code-yellow',
  namespace: 'text-code-yellow',
  deleted: 'text-code-red',
  operator: 'text-code-rose',
  inserted: 'text-code-green',
  punctuation: 'text-code-white',
  doctype: 'text-code-gray',
  selector: 'text-code-gray',
  keyword: 'text-code-purple',
  property: 'text-code-purple',
  string: 'text-code-green',
  function: 'text-code-blue',
  boolean: 'text-code-red',
  comment: 'text-gray-400 italic',
}

interface NodeProperties {
  className?: string[]
  style?: string | string[]
}

export async function getFileBySlug(type: string, slug?) {
  const source = slug
    ? fs.readFileSync(path.join(loc, type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(loc, `${type}.mdx`), 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['anchor'],
            },
            behavior: 'append',
          },
        ],
        require('remark-code-titles'),
        MDXImage,
      ],
      rehypePlugins: [
        require('@mapbox/rehype-prism'),
        () => {
          return (tree) => {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            visit(tree, 'element', (node: Node, _index, _parent) => {
              let className =
                (node.properties as NodeProperties).className || []
              const [token, type] = className
              if (token === 'token') {
                className = [tokenClassNames[type]]
              }
            })
          }
        },
      ],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug ? formatSlug(slug) : type,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(loc, type))

  return files.reduce((allPosts, postSlug) => {
    const source =
      fs.existsSync(path.join(loc, type, postSlug)) &&
      !fs.statSync(path.join(loc, type, postSlug)).isDirectory()
        ? fs.readFileSync(path.join(loc, type, postSlug), 'utf-8')
        : null

    if (!source) {
      return [...allPosts]
    }
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: formatSlug(postSlug),
      },
      ...allPosts,
    ]
  }, [])
}

export async function getAllTags(type: string) {
  const files = fs.readdirSync(path.join(loc, type))
  const tagCount = {}
  const tags = {}
  const charSlice = {}

  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source =
      fs.existsSync(path.join(loc, type, file)) &&
      !fs.statSync(path.join(loc, type, file)).isDirectory()
        ? fs.readFileSync(path.join(loc, type, file), 'utf-8')
        : null
    if (source) {
      const { data } = matter(source)
      if (data.tags) {
        data.tags.forEach((tag: string) => {
          const formattedTag = slugify(tag)
          if (formattedTag in tagCount) {
            tagCount[formattedTag] += 1
            tags[formattedTag] = tag
          } else {
            tagCount[formattedTag] = 1
            tags[formattedTag] = tag
            charSlice[formattedTag] = tag.charAt(0)
          }
        })
      }
    }
  })

  return { tagCount, tags, charSlice }
}
