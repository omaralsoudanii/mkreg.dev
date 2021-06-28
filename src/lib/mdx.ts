import { formatSlug, slugify } from '@/lib/utils'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import path from 'path'
import mdxPrism from 'mdx-prism'
import MDXImage from './MDXImage'
const root = path.join(process.cwd(), 'src')
const loc = path.join(root, 'data')

export async function getAllFilesName(type: string) {
  return fs.readdirSync(path.join(loc, type))
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
      rehypePlugins: [mdxPrism],
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
