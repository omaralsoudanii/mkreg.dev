import { GetServerSideProps } from 'next'
import RSS from 'rss'
const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')
import { URL } from 'url'
import { Environment } from '@/lib/environment'
import { format } from 'date-fns'

const RSSFeed = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const { siteUrl, ogTitle, ogImage, ogDescription, rssTTL } = Environment

  const feedOptions = {
    title: ogTitle,
    description: ogDescription,
    generator: `RSS Feed for mkreg.dev`,
    feed_url: new URL('rss.xml', siteUrl),
    site_url: new URL('', siteUrl),
    image_url: new URL(ogImage, siteUrl),
    ttl: rssTTL,
    custom_namespaces: {
      content: `http://purl.org/rss/1.0/modules/content/`,
      media: `http://search.yahoo.com/mrss/`,
    },
  }
  const feed = new RSS(feedOptions)

  const dirs = ['writing', 'mk']
  try {
    await Promise.all(
      dirs.map(async (dir) => {
        const p = path.join('src', 'data', dir)

        const posts = await fs.readdir(p)

        await Promise.all(
          posts.map(async (name) => {
            const content = await fs.readFile(path.join(p, name))
            const frontmatter = matter(content)
            const url = name
              ? siteUrl + '/' + dir + '/' + name.replace(/\.mdx?/, '')
              : siteUrl
            feed.item({
              title: frontmatter.data.title ?? ogTitle,
              url: url,
              date: frontmatter.data.publishedAt,
              description: frontmatter.data.description ?? ogDescription,
              author: ogTitle,
            })
          })
        )
      })
    )
    res.setHeader('Content-Type', 'text/xml')
    res.write(feed.xml({ indent: true }))
    res.end()
  } catch {
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: format(new Date(), 'yyyy-dddd-mm'),
      description: ogDescription,
      author: ogTitle,
    })
    res.setHeader('Content-Type', 'text/xml')
    res.write(feed.xml({ indent: true }))
    res.end()
  }

  return {
    props: {},
  }
}

export default RSSFeed
