import cheerio from 'cheerio'
import RSS from 'rss'

import { GhostPostOrPage, GhostPostsOrPages } from '@/lib/ghost'
import { Environment } from '@/lib/environment'
import { resolve } from 'url'
import { Tag } from '@tryghost/content-api'

interface FeedProps {
  posts: GhostPostsOrPages
}

export const generateRSSFeed = ({ posts }: FeedProps) => {
  const { siteUrl, ogTitle, ogDescription, ogImage } = Environment
  const feedOptions = {
    title: ogTitle,
    description: ogDescription,
    generator: `Omar Alsoudani RSS Feed`,
    feed_url: resolve(siteUrl, 'rss.xml'),
    site_url: resolve(siteUrl, ''),
    image_url: resolve(siteUrl, ogImage),
    ttl: 60,
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
  const { siteUrl } = Environment
  const {
    url = '',
    canonical_url,
    html,
    title = '',
    excerpt: description = '',
    id: guid,
    published_at: date,
    tags,
    primary_author: author,
  } = post
  const postUrl = canonical_url || url
  const itemUrl = postUrl?.replace(Environment.ghost.apiUrl || '', siteUrl)

  // ToDo:
  // const transformedHtml = post.htmlAst
  const htmlContent = cheerio.load(html || '', {
    decodeEntities: false,
    xmlMode: true,
  })
  const imageUrl = post.feature_image

  const tagsFilter = (tags: Tag[]) =>
    tags
      .filter(({ name }) => !!name && name.substr(0, 5) !== 'hash-')
      .map(({ name }) => name || '')

  const item = {
    title,
    description,
    guid,
    url: itemUrl,
    date: (!!date && date) || '',
    categories: (tags && tagsFilter(tags)) || [],
    author: (author && author.name) || '',
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
