/* eslint-disable prettier/prettier */
import { Environment } from '@/lib/environment'

const { ogTitle, siteUrl, social, ogDescription } = Environment

const GenerateRSSItem = (post) => `
  <item>
    <guid>${siteUrl}/writing/${post.slug}</guid>
    <title>${post.title}</title>
    <link>${siteUrl}/writing/${post.slug}</link>
    <description>${post.description}</description>
    <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    <author>${social.mail} (${ogTitle})</author>
    ${post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`

const GenerateRSS = (posts, page = 'index.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${ogTitle}</title>
      <link>${siteUrl}/writing</link>
      <description>${ogDescription}</description>
      <language>en-US</language>
      <managingEditor>${social.mail} (${ogTitle})</managingEditor>
      <webMaster>${social.mail} (${ogTitle})</webMaster>
      <lastBuildDate>${new Date(
        posts[0].publishedAt
      ).toUTCString()}</lastBuildDate>
      <atom:link href="${siteUrl}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(GenerateRSSItem).join('')}
    </channel>
  </rss>
`
export default GenerateRSS
