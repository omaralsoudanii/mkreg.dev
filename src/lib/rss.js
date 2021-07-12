const { promises: fs } = require('fs')
const path = require('path')
const RSS = require('rss')
const matter = require('gray-matter')
const { URL } = require('url')

const FormatDate = (value) => {
  return new Date(value).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

;(async () => {
  const siteUrl = 'https://mkreg.dev'
  const ogTitle = 'Omar Alsoudani'
  const ogImage = '/static/images/mk.jpg'
  const ogDescription = 'Software developer, creator and the king of laziness.'
  const feedOptions = {
    title: ogTitle,
    description: ogDescription,
    generator: `Omar Alsoudani RSS Feed`,
    feed_url: new URL('rss.xml', siteUrl),
    site_url: new URL('', siteUrl),
    image_url: new URL(ogImage, siteUrl),
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

    fs.writeFile('public/rss.xml', feed.xml({ indent: true }))
  } catch (e) {
    // fallback default
    feed.item({
      title: ogTitle,
      url: siteUrl,
      date: FormatDate(new Date()),
      description: ogDescription,
      author: ogTitle,
    })
    await fs.writeFile('public/rss.xml', feed.xml({ indent: true }))
  }
})()
