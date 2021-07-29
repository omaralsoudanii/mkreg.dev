import fs from 'fs'
import path from 'path'

import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

import { formatSlug, slugify } from '@/lib/utils'

import mdxImage from './mdx-image'
import remarkCodeTitles from './remarkCodeTitles'
const root = path.join(process.cwd(), 'src')
const loc = path.join(root, 'data')

export async function getAllFilesName(type: string) {
  return fs.readdirSync(path.join(loc, type))
}

export async function getFileBySlug(type: string, slug?) {
  const source = slug
    ? fs.readFileSync(path.join(loc, type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(loc, `${type}.mdx`), 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      process.cwd(),
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  const { frontmatter, code } = await bundleMDX(source, {
    cwd: path.join(process.cwd(), 'src', 'components'),
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        require('remark-slug'),
        [
          require('remark-autolink-headings'),
          {
            linkProperties: {
              className: ['heading-anchor'],
            },
            behavior: 'append',
          },
        ],
        require('remark-gfm'),
        remarkCodeTitles,
        mdxImage,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        require('@mapbox/rehype-prism'),
      ]
      return options
    },
    esbuildOptions(options) {
      options.target = ['es2015']
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
        '.tsx': 'tsx',
      }
      return options
    },
  })

  return {
    mdxSource: code,
    frontMatter: {
      slug: slug ? formatSlug(slug) : type,
      ...frontmatter,
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
