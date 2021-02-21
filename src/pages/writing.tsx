import WritingList from '@/components/Writing/List'
import FullscreenLoading from '@/components/FullscreenLoading'
import { CenteredColumn } from '@/components/Layouts'
import Page, { PageHeader } from '@/components/Page'
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
      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <PageHeader
            title={Environment.ogTitle}
            subtitle={Environment.ogDescription}
          />
          {posts && posts.length ? (
            <WritingList posts={posts} />
          ) : (
            <p className="text-2xl">
              There seems to be no posts at the moment.
            </p>
          )}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | []
  const { revalidate } = Environment.isr

  try {
    posts = await getAllPosts()
  } catch (error) {
    return {
      props: {
        posts,
      },
      revalidate: revalidate,
    }
  }
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
