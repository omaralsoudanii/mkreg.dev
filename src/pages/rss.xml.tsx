import { promises as fs } from 'fs'
import { join } from 'path'
import { URL } from 'url'

import matter from 'gray-matter'
import type { GetServerSideProps } from 'next'
import RSS from 'rss'

import { Environment } from '@/lib/environment'
import { FormatDate } from '@/lib/utils'

const Feed = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
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
        const p = join(process.cwd(), 'src', 'data', dir)
        const posts = await fs.readdir(p)

        await Promise.all(
          posts.map(async (name) => {
            try {
              const content = await fs.readFile(join(p, name))
              const frontmatter = matter(content)

              const resolvedDir = dir === '' ? dir.concat('/') : '/'.concat(dir, '/')

              const url = name ? siteUrl.concat(resolvedDir, name.replace(/\.mdx?/, '')) : siteUrl

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
  } catch (e) {
    // fallback default
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: FormatDate(new Date()),
      description: ogDescription,
      author: ogTitle,
    })
  }

  res.setHeader('Content-Type', 'text/xml')
  res.setHeader('Cache-Control', 's-maxage=3600')
  res.write(feed.xml({ indent: true }))
  res.end()
  return {
    props: {},
  }
}

export default Feed
