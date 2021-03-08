import WritingList from '@/components/Writing/List'
import FullscreenLoading from '@/components/FullscreenLoading'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import { Environment } from '@/environment'
import { getAllPosts, GhostPostsOrPages } from '@/ghost/api'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import React from 'react'
import SeoConfig from '@/default.seo'
import { DefaultSeo } from 'next-seo'

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
        <DefaultSeo
          {...SeoConfig}
          title="Writing"
          description="Writing about programming, software & Vim vs Emacs."
        />
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>Writing</h1>
              <p className="text-2xl">
                Writing about programming, software & Vim vs Emacs.
              </p>
            </div>
          </div>
          <WritingList posts={posts} />
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
    throw new Error(`Index creation failed: ${error}`)
  }
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
