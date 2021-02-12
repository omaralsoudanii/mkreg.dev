import cheerio from 'cheerio'
import RSS from 'rss'

import { GhostPostOrPage, GhostPostsOrPages } from '@/ghost/api'
import { resolve } from 'url'
import { Environment } from '@/environment'

interface FeedProps {
  posts: GhostPostsOrPages
}

export const generateRSSFeed = ({ posts }: FeedProps) => {
  const { siteUrl, ogTitle, ogImage, ogDescription, rssTTL } = Environment
  const feedOptions = {
    title: ogTitle,
    description: ogDescription,
    generator: `RSS Feed for mkreg.dev`,
    feed_url: resolve(siteUrl, 'rss/'),
    site_url: resolve(siteUrl, ''),
    image_url: resolve(siteUrl, ogImage),
    ttl: rssTTL,
    custom_namespaces: {
      content: `http://purl.org/rss/1.0/modules/content/`,
      media: `http://search.yahoo.com/mrss/`,
    },
  }

  const feed = new RSS(feedOptions)

  const feedItems = posts.map((post) => generateItem({ post }))

  feedItems.forEach((item) => feed.item(item))

  return feed.xml({ indent: false })
}

interface ItemProps {
  post: GhostPostOrPage
}

const generateItem = ({ post }: ItemProps) => {
  const { blogUrl, ogTitle, ghostAPIUrl, ogDescription } = Environment
  const {
    url = '',
    canonical_url,
    html,
    title = ogTitle,
    excerpt: description = ogDescription,
    id: guid,
    published_at: published_at,
    updated_at: updated_at,
  } = post

  const postUrl = canonical_url || url
  const itemUrl = postUrl?.replace(ghostAPIUrl, blogUrl)

  const htmlContent = cheerio.load(html || '', {
    decodeEntities: false,
    xmlMode: true,
  })
  const imageUrl = post.feature_image

  const item = {
    title,
    description,
    guid,
    url: itemUrl,
    date: (!!updated_at && updated_at) || published_at,
    author: ogTitle,
    custom_elements: [{}],
  }

  if (imageUrl) {
    // Add a media content tag
    item.custom_elements.push({
      'media:content': {
        _attr: {
          url: imageUrl,
          medium: `image`,
        },
      },
    })
    // Also add the image to the content, because not all readers support media:content
    htmlContent(`p`)
      .first()
      .before(`<img src="` + imageUrl + `" />`)
    htmlContent(`img`).attr(`alt`, title || '')
  }

  item.custom_elements.push({
    'content:encoded': {
      _cdata: htmlContent.html(),
    },
  })
  return item
}
