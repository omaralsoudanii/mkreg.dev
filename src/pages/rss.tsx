import { GetServerSideProps } from 'next'

import { getAllPosts, GhostPostsOrPages } from '@/lib/ghost'
import { generateRSSFeed } from '@/lib/rss'

const RSS = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    throw new Error('Index creation failed.')
  }

  const rssData = generateRSSFeed({ posts })

  if (res && rssData) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(rssData)
    res.end()
  }

  return {
    props: {},
  }
}

export default RSS
