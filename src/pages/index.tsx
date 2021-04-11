import Link from 'next/link'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import PostsContainer from '@/components/Posts/Container'
import Heading from '@/components/Heading'
import { seoImage } from '@/components/Seo/seoImage'
import { getAllPosts, GhostPostsOrPages } from '@/lib/ghost'
import React from 'react'
import { SEO } from '@/components/Seo/seo'

function Home({ data }) {
  const router = useRouter()
  if (router.isFallback) return <div>Loading...</div>
  return (
    <React.Fragment>
      <SEO seoImage={data.seoImage} />
      <article>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col items-start space-y-8 sm:items-center sm:text-center">
            <Heading
              title="Hi, I’m Omar"
              subTitle="I made this site to understand what the heck is Jamstack 🤔, it seems like I will spend the next year researching and reading about typography. Should've just installed Ghost instead 🤦"
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
          <PostsContainer href="/writing" name="Writing" posts={data.posts} />
        </div>
      </article>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  let posts: GhostPostsOrPages | []

  try {
    posts = await getAllPosts()
  } catch (error) {
    console.log(error)
    // throw new Error('Index creation failed.')
  }

  const data = {
    posts,
    seoImage: await seoImage({ siteUrl: Environment.siteUrl }),
  }

  return {
    props: {
      data,
    },
    ...(Environment.isr.enable && { revalidate: Environment.isr.revalidate }),
  }
}

export default Home
