/* eslint-disable no-useless-escape */
const globby = require('globby')
const prettier = require('prettier')
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')

const root = path.join(process.cwd(), 'src')
const loc = path.join(root, 'data')

const slugify = (str) =>
  str &&
  str
    .trim()
    .replace(/[^\.a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

function getAllTags(type) {
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
        data.tags.forEach((tag) => {
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

;(async () => {
  const prettierConfig = await prettier.resolveConfig('../.prettierrc.js')
  const { tags } = await getAllTags('writing')

  const tagPage = Object.keys(tags).map((tag) => `/tags/${tag}`)

  const sitePages = await globby([
    'src/pages/*.tsx',
    'src/data/**/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
    '!src/pages/500.tsx',
    '!src/data/*.mdx',
  ])

  const pages = sitePages.concat(tagPage)

  const sitemap = `
        <?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            ${pages
              .map((page) => {
                const path = page
                  .replace('src/', '')
                  .replace('pages', '')
                  .replace('data', '')
                  .replace('.tsx', '')
                  .replace('.mdx', '')
                const route = path === '/index' ? '' : path
                return `
                          <url>
                              <loc>${`https://mkreg.dev${route}`}</loc>
                          </url>
                      `
              })
              .join('')}
          </urlset>
      `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  })

  fs.writeFileSync('public/sitemap.xml', formatted)
})()
