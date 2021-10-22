import { readdirSync, readFileSync, existsSync, statSync } from 'fs'
import { join } from 'path'

import matter from 'gray-matter'
import { Element } from 'hast'
import { h } from 'hastscript'
import { toString } from 'mdast-util-to-string'
import { bundleMDX } from 'mdx-bundler'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitles from 'rehype-code-titles'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'
import remarkGfm from 'remark-gfm'

import { FormatDate, formatSlug, slugify } from '@/lib/utils'

const root = join(process.cwd(), 'src')
const loc = join(root, 'data')

function hashContent(node: Element) {
  return [
    h('span.visually-hidden', `Read the “ ${toString(node)} ” section`),
    h('span.icon.icon-link', { ariaHidden: true }),
  ]
}

export async function getAllFilesName(type: string) {
  return readdirSync(join(loc, type))
}

export async function getFileBySlug(type: string, slug?) {
  const source = slug
    ? readFileSync(join(loc, type, `${slug}.mdx`), 'utf8')
    : readFileSync(join(loc, `${type}.mdx`), 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = join(process.cwd(), 'node_modules', 'esbuild', 'esbuild.exe')
  } else {
    process.env.ESBUILD_BINARY_PATH = join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { frontmatter, code } = await bundleMDX(source, {
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        [
          rehypeAutolinkHeadings,
          {
            behavior: 'append',
            linkProperties: {
              ariaHidden: true,
              tabIndex: -1,
            },
            content: hashContent,
          },
        ],
        rehypeCodeTitles,
        rehypePrism,
      ]
      return options
    },
    esbuildOptions(options) {
      options.treeShaking = true
      options.minify = true
      options.target = ['es2015']
      options.tsconfig = join(process.cwd(), 'tsconfig.json')
      options.loader = {
        ...options.loader,
        '.tsx': 'tsx',
        '.svg': 'tsx',
      }
      return options
    },
  })

  if (frontmatter?.lastmod) {
    frontmatter.lastmod = FormatDate(frontmatter.lastmod)
  }

  return {
    code,
    frontMatter: {
      ...frontmatter,
      slug: slug ? encodeURIComponent(formatSlug(slug)) : encodeURIComponent(type),
      date: FormatDate(frontmatter.date),
    } as { [key: string]: any },
  }
}

export async function getAllFilesFrontMatter(type: string) {
  const files = readdirSync(join(loc, type))

  return files.reduce((allPosts, postSlug) => {
    const source =
      existsSync(join(loc, type, postSlug)) && !statSync(join(loc, type, postSlug)).isDirectory()
        ? readFileSync(join(loc, type, postSlug), 'utf-8')
        : null

    if (!source) {
      return [...allPosts]
    }
    const { data } = matter(source)

    if (data?.draft === true) {
      return [...allPosts]
    }
    if (data?.lastmod) {
      data.lastmod = FormatDate(data.lastmod)
    }
    return [
      {
        ...data,
        date: FormatDate(data.date),
        slug: encodeURIComponent(formatSlug(postSlug)),
      },
      ...allPosts,
    ]
  }, [])
}

export async function getAllTags(type: string) {
  const files = readdirSync(join(loc, type))
  const tagCount = {}
  const tags = {}
  const charSlice = {}

  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source =
      existsSync(join(loc, type, file)) && !statSync(join(loc, type, file)).isDirectory()
        ? readFileSync(join(loc, type, file), 'utf-8')
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
