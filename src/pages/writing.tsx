import WritingList from '@/components/Writing/List'
import FullscreenLoading from '@/components/FullscreenLoading'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import { Environment } from '@/environment'
import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'

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
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>{Environment.ogTitle}</h1>
              <p className="text-2xl">{Environment.ogDescription}</p>
            </div>
          </div>
          {posts && posts.length ? (
            <React.Fragment>
              <div className="hr-stroke" />
              <WritingList posts={posts} />
            </React.Fragment>
          ) : (
            <p className="mt-4 text-xl">
              There seems to be no posts at the moment. But let's not kid each
              other. I probably pushed something buggy.
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
