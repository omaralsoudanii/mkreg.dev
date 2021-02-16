import WritingList from '@/components/Writing/List'
import FullscreenLoading from '@/components/FullscreenLoading'
import { CenteredColumn } from '@/components/Layouts'
import Page, { PageHeader } from '@/components/Page'
import SEO from '@/components/Seo'
import { Environment } from '@/environment'
import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'

/**
 * Main writing page
 *
 * Loads all posts from Ghost
 *
 */

interface IndexProps {
  posts: GhostPostsOrPages
}

export default function Writing({ posts }: IndexProps) {
  const router = useRouter()
  if (router.isFallback) return <FullscreenLoading />
  return (
    <Page>
      <SEO />

      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <PageHeader
            title={Environment.ogTitle}
            subtitle={Environment.ogDescription}
          />

          {posts && <WritingList posts={posts} />}
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

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
