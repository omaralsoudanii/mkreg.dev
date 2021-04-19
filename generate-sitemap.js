/* eslint-disable no-useless-escape */
const fs = require('fs')
const globby = require('globby')
const path = require('path')
const prettier = require('prettier')
const matter = require('gray-matter')

const slugify = (str) =>
  str &&
  str
    .trim()
    .replace(/[^\.a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')

  const files = fs.readdirSync(path.join(__dirname, 'src', 'data', 'writing'))

  const tagCount = {}
  // Iterate through each post, putting all found tags into `tags`
  files.forEach((file) => {
    const source = fs.readFileSync(
      path.join(__dirname, 'src', 'data', 'writing', file),
      'utf8'
    )
    const { data } = matter(source)
    if (data.tags) {
      data.tags.forEach((tag) => {
        const formattedTag = slugify(tag)
        if (formattedTag in tagCount) {
          tagCount[formattedTag] += 1
        } else {
          tagCount[formattedTag] = 1
        }
      })
    }
  })

  const tagPage = Object.keys(tagCount).map((tag) => `/tags/${tag}`)

  const sitePages = await globby([
    'src/pages/*.tsx',
    'src/data/**/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/rss.tsx',
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

  // eslint-disable-next-line no-sync
  fs.writeFileSync('./public/sitemap.xml', formatted)
})()
