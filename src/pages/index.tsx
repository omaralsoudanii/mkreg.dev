import * as React from 'react'
import Link from 'next/link'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import PostsContainer from '@/components/Posts/Container'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Heading from '@/components/Heading'

function Home({ posts }) {
  return (
    <article>
      <div className="flex flex-col space-y-12">
        <div className="flex flex-col items-start space-y-8 sm:items-center sm:text-center">
          <Heading
            title="Hi, I’m Omar"
            subTitle="I made this site to understand what the heck is Jamstack 🤔, apparently it seems like i will spend the next year researching and reading about typography. Should've just installed Ghost instead 🤦"
          />
          <div className="flex flex-col w-full space-y-4 sm:space-x-4 sm:flex-row sm:w-max sm:space-y-0">
            <Link href="/about">
              <a className="btn btn-primary btn-large">More about me</a>
            </Link>
            <a
              href={Environment.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-large"
            >
              Reach me via LinkedIn
            </a>
          </div>
        </div>
        <div className=" hr-stroke" />
        <PostsContainer href="/writing" name="Recent" posts={posts} />
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingMetadata = await getAllFilesFrontMatter('writing')
  const posts = WritingMetadata.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  ).slice(0, 5)

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}

export default Home
