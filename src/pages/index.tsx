import MDXComponents from '@/components/MDXComponents'
import * as React from 'react'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'
import Seo from '@/components/Seo'

function Home({ mdxSource, frontMatter }) {
  const meta = {
    title: `Omar Alsoudani - ${frontMatter.title}`,
    description: frontMatter.summary,
    image: {
      url: frontMatter?.image,
      alt: frontMatter.title,
    },
    tags: frontMatter?.tags,
    JsonLd: true,
  }
  return (
    <React.Fragment>
      <Seo data={meta} />
      <div className="divide-y mx-auto">
        <header id="skip" className="pb-4">
          <h1 className="post-title">Hi, I'm Omar Alsoudani</h1>
        </header>
        <div className="items-start space-y-2 xl:space-y-0">
          <div className="pt-8 pb-8 prose dark:prose-dark lg:prose-lg !max-w-[75ch]">
            <MDXRemote {...mdxSource} components={MDXComponents} />
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('about')
  return { props: post }
}

export default Home
