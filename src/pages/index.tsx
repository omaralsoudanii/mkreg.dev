import Link from 'next/link'
import Page from '@/components/Page'
import fs from 'fs'
import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/environment'
import { GhostPostsOrPages, getAllPosts } from '@/ghost/api'
import { GetStaticProps } from 'next'
import FeaturedPosts from '@/components/Writing/FeaturedPosts'
import React from 'react'
import { generateRSSFeed } from '@/ghost/rss'
import SeoConfig from '@/default.seo'
import { DefaultSeo } from 'next-seo'

function Home({ posts }) {
  return (
    <Page>
      <CenteredColumn>
        <DefaultSeo {...SeoConfig} description="My personal website" />
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>Hello, I’m Omar</h1>
              <p className="text-2xl">
                A programmer who made this site out of bordem, I'll be writing
                about software & development in general, excluding the Frontend
                ofcourse 🤔
              </p>
              <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:text-center">
                <Link href="/about" passHref>
                  <a className="btn btn-primary btn-large">More about me</a>
                </Link>
                <a
                  href={Environment.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-large"
                >
                  Follow me on Github
                </a>
              </div>
            </div>
          </div>
          {posts && (
            <React.Fragment>
              <FeaturedPosts posts={posts} />
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
    posts = await getAllPosts()
  } catch (error) {
    throw new Error(`Index creation failed: ${error}`)
  }

  if (Environment.rssTTL && posts.length) {
    const rss = generateRSSFeed({ posts })
    fs.writeFileSync('./public/rss.xml', rss)
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
