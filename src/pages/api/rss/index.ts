import { promises as fs } from 'fs'
import path from 'path'
import { URL } from 'url'

import matter from 'gray-matter'
import type { NextApiRequest, NextApiResponse } from 'next'
import RSS from 'rss'

import { Environment } from '@/lib/environment'
import { FormatDate } from '@/lib/utils'

const handler = async (
  _: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const { siteUrl, ogTitle, ogImage, ogDescription, isr } = Environment

  const feedOptions = {
    title: ogTitle,
    description: ogDescription,
    generator: `Omar Alsoudani RSS Feed`,
    feed_url: new URL('rss.xml', siteUrl),
    site_url: new URL('', siteUrl),
    image_url: new URL(ogImage, siteUrl),
    ttl: isr.revalidate,
    custom_namespaces: {
      content: `http://purl.org/rss/1.0/modules/content/`,
      media: `http://search.yahoo.com/mrss/`,
    },
  }
  const feed = new RSS(feedOptions)

  const dirs = ['writing', 'writing/linux-commands']
  try {
    await Promise.all(
      dirs.map(async (dir) => {
        const p = path.join(process.cwd(), 'src', 'data', dir)
        const posts = await fs.readdir(p)

        await Promise.all(
          posts.map(async (name) => {
            try {
              const content = await fs.readFile(path.join(p, name))
              const frontmatter = matter(content)

              const resolvedDir =
                dir === '' ? dir.concat('/') : '/'.concat(dir, '/')

              const url = name
                ? siteUrl.concat(resolvedDir, name.replace(/\.mdx?/, ''))
                : siteUrl

              feed.item({
                title: frontmatter.data.title ?? ogTitle,
                url: url,
                date: frontmatter.data.date,
                description: frontmatter.data.summary ?? ogDescription,
                author: ogTitle,
                categories: frontmatter.data.tags ?? ['Software development'],
              })
            } catch (e) {
              // just too lazy to check if we are reading a dir or a file
            }
          })
        )
      })
    )

    res.setHeader('content-type', 'text/xml')

    res.send(feed.xml({ indent: true }))
  } catch (e) {
    // fallback default
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: FormatDate(new Date()),
      description: ogDescription,
      author: ogTitle,
    })
    res.setHeader('content-type', 'text/xml')

    res.send(feed.xml({ indent: true }))
  }
}

export default handler