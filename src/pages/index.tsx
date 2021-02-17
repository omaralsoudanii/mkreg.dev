import Link from 'next/link'
import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/environment'
import { GhostPostsOrPages, getAllPosts } from '@/ghost/api'
import { GetStaticProps } from 'next'
import RecentPosts from '@/components/Writing/Recent/Index'
import React from 'react'

function Home({ posts }) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>Hello, I’m Omar</h1>
              <p className="text-2xl">
                A programmer who made this site out of bordem, I'll be writing
                about software and development in general, excluding the
                Frontend ofcourse 🤔
              </p>
              <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:text-center">
                <Link href="/about" passHref>
                  <a>
                    <button className="w-full text-lg btn btn-primary btn-large">
                      More about me
                    </button>
                  </a>
                </Link>
                <a
                  href="https://github.com/omaralsoudanii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full text-lg btn btn-large">
                    Github
                  </button>
                </a>
              </div>
            </div>
          </div>
          {posts && (
            <React.Fragment>
              <hr className="space-y-1 border-gray-300 dark:bg-gray-800" />
              <RecentPosts posts={posts} />
            </React.Fragment>
          )}
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts({ limit: 5 })
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

export default Home
