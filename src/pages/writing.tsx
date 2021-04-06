import * as React from 'react'
import PostsList from '@/components/Posts/List'
import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Heading from '@/components/Heading'
import { Environment } from '@/lib/environment'
import Link from 'next/link'
import Seo from '@/components/Seo'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const meta = {
    title: 'Writing',
    description: 'Writing about programming, software & Vim vs Emacs.',
  }

  return (
    <article>
      <Seo data={meta} />
      <div className="flex flex-col items-start space-y-8">
        <Heading
          title="Writing"
          subTitle="Writing about programming, software & Vim vs Emacs."
        />
        <Link href="/tags">
          <a className="text-base text-link sm:text-lg">Tags &rarr;</a>
        </Link>
        <div className=" hr-stroke" />
        <PostsList href="/writing" posts={posts} />
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
