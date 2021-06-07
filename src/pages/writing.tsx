import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const meta = {
    title: 'Omar Alsoudani - Writing',
    description: 'Writing about programming, software and Vim vs Emacs.',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-8">
          <h1 className="!mb-4">Writing</h1>
          <p>
            Stuff I write about programming, software with a slight hint of
            salt.
          </p>
          <p className="text-right text-secondary">
            <Link href="/tags">
              <a className="mr-1 link-unstyled">Browse by Tags &rarr;</a>
            </Link>
          </p>
        </section>
        <section>
          <PostsContainer href="/writing" posts={posts} />
        </section>
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return {
    props: {
      posts,
    },
  }
}
