import BlogList from '@/components/Blog/List'
import FullscreenLoading from '@/components/FullscreenLoading'
import { CenteredColumn } from '@/components/Layouts'
import Page, { PageHeader } from '@/components/Page'
import SEO from '@/components/Seo'
import { Environment } from '@/environment'
import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'
import { generateRSSFeed } from '@/ghost/rss'
import fs from 'fs'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

/**
 * Main blog page
 *
 * Loads top 5 posts from Ghost
 *
 */

interface IndexProps {
  posts: GhostPostsOrPages
}

export default function Blog({ posts }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <FullscreenLoading />
  return (
    <Page>
      <SEO />

      <CenteredColumn>
        <div className="flex flex-col space-y-14">
          <PageHeader
            title={Environment.ogTitle}
            subtitle={Environment.ogDescription}
          />

          {posts && <BlogList posts={posts} />}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    return {
      notFound: true,
    }
  }

  if (!posts.length) {
    return {
      notFound: true,
    }
  }

  if (Environment.NODE_ENV === 'production') {
    const rss = generateRSSFeed({ posts })
    fs.writeFileSync('./public/rss.xml', rss)
  }

  const { enable, revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    ...(enable && { revalidate: revalidate }),
  }
}
