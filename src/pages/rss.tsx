import { Environment } from '@/lib/environment'
import dayjs from 'dayjs'
import { promises as fs } from 'fs'
import matter from 'gray-matter'
import { GetStaticProps } from 'next'
import path from 'path'
import RSS from 'rss'
import { URL } from 'url'

const RSSFeed = () => null

export const getStaticProps: GetStaticProps = async () => {
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

  const dirs = ['writing', '']
  try {
    await Promise.all(
      dirs.map(async (dir) => {
        const p = path.join('src', 'data', dir)

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
              console.log(`RSS feed item error`, e)
            }
          })
        )
      })
    )

    fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
  } catch (e) {
    console.log(`RSS feed full build error`, e)
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: dayjs(new Date()).format('YYYY-MM-DD'),
      description: ogDescription,
      author: ogTitle,
    })
    fs.writeFile('./public/rss.xml', feed.xml({ indent: true }))
  }

  return {
    props: {},
    revalidate: isr.revalidate,
  }
}

export default RSSFeed
