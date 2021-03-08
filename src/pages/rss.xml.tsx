import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'
import { generateRSSFeed } from '@/ghost/rss'
import { GetServerSideProps } from 'next'
import { Environment } from '@/environment'

const RSS = () => null

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    throw new Error('Index creation failed.')
  }

  let rssData = null
  if (Environment.rssTTL && posts.length) {
    rssData = generateRSSFeed({ posts })
  }

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
