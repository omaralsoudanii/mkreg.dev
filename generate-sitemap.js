/* eslint-disable no-useless-escape */
const fs = require('fs')
const globby = require('globby')
const path = require('path')
const prettier = require('prettier')
const matter = require('gray-matter')

if (
  process.env.NODE_ENV !== 'production' &&
  process.env.SITE_URL !== 'https://mkreg.dev'
) {
  return
}

const slugify = (str) =>
  str &&
  str
    .trim()
    .replace(/[^\.a-z0-9-]/gi, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .toLowerCase()

const loc = path.join(__dirname, 'src', 'data')

;(async () => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const type = 'writing'
  const files = fs.readdirSync(path.join(loc, type))
  const pageFiles = fs.readdirSync(loc)
  const allFiles = files.concat(pageFiles)
  const tagCount = {}
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
        data.tags.forEach((tag) => {
          const formattedTag = slugify(tag)
          if (formattedTag in tagCount) {
            tagCount[formattedTag] += 1
          } else {
            tagCount[formattedTag] = 1
          }
        })
      }
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
