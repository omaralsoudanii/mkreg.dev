/* eslint-disable no-useless-escape */
import globby from 'globby'
import prettier from 'prettier'
import { getAllTags } from '@/lib/mdx'

import type { NextApiRequest, NextApiResponse } from 'next'
import { Environment } from '@/lib/environment'

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
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

  res.send(formatted)
}

export default handler
