import fs from 'fs'
import matter from 'gray-matter'
import mdxPrism from 'mdx-prism'
import path from 'path'
import renderToString from 'next-mdx-remote/render-to-string'

import MDXComponents from '@/components/MDXComponents'

const root = process.cwd()

export async function getAllFilesName(type) {
  return fs.readdirSync(path.join(root, 'src', 'data', type))
}

export async function getPageFile(slug) {
  const mdxPath = path.join(root, 'src', 'data', `${slug}.mdx`)
  const mdPath = path.join(root, 'src', 'data', `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug ? formatSlug(slug) : null,
      ...data,
    },
  }
}

export async function getFileBySlug(type, slug) {
  const mdxPath = path.join(root, 'src', 'data', type, `${slug}.mdx`)
  const mdPath = path.join(root, 'src', 'data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  const { data, content } = matter(source)
  const mdxSource = await renderToString(content, {
    components: MDXComponents,
    mdxOptions: {
      remarkPlugins: [
        require('remark-autolink-headings'),
        require('remark-slug'),
        require('remark-code-titles'),
      ],
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    mdxSource,
    frontMatter: {
      slug: slug ? formatSlug(slug) : null,
      ...data,
    },
  }
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

export async function getAllFilesFrontMatter(type) {
  const files = fs.readdirSync(path.join(root, 'src', 'data', type))

  return files.reduce((allPosts, postSlug) => {
    const source = fs.readFileSync(
      path.join(root, 'src', 'data', type, postSlug),
      'utf8'
    )
    const { publishedAt, tags, description, title } = matter(source).data

    return [
      {
        publishedAt,
        tags,
        description,
        title,
        slug: formatSlug(postSlug),
      },
      ...allPosts,
    ]
  }, [])
}
