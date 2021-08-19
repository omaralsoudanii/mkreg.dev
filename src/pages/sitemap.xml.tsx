import { globby } from 'globby'
import { GetServerSideProps } from 'next'
import prettier from 'prettier'

import { Environment } from '@/lib/environment'
import { getAllTags } from '@/lib/mdx'

const Sitemap = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const { tags } = await getAllTags('writing')

  const tagPage = Object.keys(tags).map((tag) => `/tags/${tag}`)

  const sitePages = await globby([
    'src/pages/*.tsx',
    'src/data/**/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
    '!src/pages/sitemap.xml.tsx',
    '!src/pages/rss.xml.tsx',
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
                              <loc>${`${Environment.siteUrl}${route}`}</loc>
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

  res.setHeader('content-type', 'text/xml')
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.write(formatted)
  res.end()
  return {
    props: {},
  }
}

export default Sitemap
