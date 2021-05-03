import { slugify } from '@/lib/utils'
import fs from 'fs'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'
import mdxPrism from 'mdx-prism'
import path from 'path'

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
      remarkPlugins: [require('remark-code-titles')],
      rehypePlugins: [mdxPrism, require('rehype-slug')],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug ? slug.replace(/\.mdx/, '') : null,
      ...data,
    },
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = fs.readdirSync(path.join(loc, type))
  const allPages = fs.readdirSync(path.join(loc))
  const allFiles = files.concat(allPages)

  return allFiles.reduce((allPosts, postSlug) => {
    const source =
      fs.existsSync(path.join(loc, type, postSlug)) &&
      !fs.statSync(path.join(loc, type, postSlug)).isDirectory()
        ? fs.readFileSync(path.join(loc, type, postSlug), 'utf-8')
        : !fs.statSync(path.join(loc, postSlug)).isDirectory()
        ? fs.readFileSync(path.join(loc, postSlug), 'utf-8')
        : null

    if (!source) {
      return [...allPosts]
    }
    const { data } = matter(source)

    return [
      {
        ...data,
        slug: postSlug.replace('.mdx', ''),
      },
      ...allPosts,
    ]
  }, [])
}

export async function getAllTags(type: string) {
  const files = fs.readdirSync(path.join(loc, type))
  const pageFiles = fs.readdirSync(loc)
  const allFiles = files.concat(pageFiles)
  const tagCount = {}
  const tags = {}
  // Iterate through each post, putting all found tags into `tags`
  allFiles.forEach((file) => {
    const source =
      fs.existsSync(path.join(loc, type, file)) &&
      !fs.statSync(path.join(loc, type, file)).isDirectory()
        ? fs.readFileSync(path.join(loc, type, file), 'utf-8')
        : !fs.statSync(path.join(loc, file)).isDirectory()
        ? fs.readFileSync(path.join(loc, file), 'utf-8')
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
          }
        })
      }
    }
  })

  return { tagCount, tags }
}
