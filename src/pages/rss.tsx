import { GetStaticProps } from 'next'
import RSS from 'rss'
const { promises: fs } = require('fs')
const path = require('path')
const matter = require('gray-matter')
import { URL } from 'url'
import { Environment } from '@/lib/environment'
import dayjs from 'dayjs'

const RSSFeed = () => null

export const getStaticProps: GetStaticProps = async () => {
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

  const dirs = ['writing']
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
              categories: frontmatter.data.tags ?? ['Programming'],
            })
          })
        )
      })
    )
    fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
  } catch {
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: dayjs(new Date()).format('YYYY-MM-DD HH:mm'),
      description: ogDescription,
      author: ogTitle,
    })
    fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
  }

  return {
    props: {},
    revalidate: rssTTL,
  }
}

export default RSSFeed