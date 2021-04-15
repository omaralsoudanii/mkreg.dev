import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import GenerateRSS from '@/lib/generate-rss'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import fs from 'fs'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import path from 'path'
import * as React from 'react'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const meta = {
    title: 'Writing - Omar Alsoudani',
    description: 'Writing about programming, software & Vim vs Emacs.',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20 space-y-8">
          <h1>Writing</h1>
          <p>Stuff I wrote about programming, software & Vim vs Emacs.</p>
          <p className="text-right">
            <Link href="/tags">
              <a className="text-link">Browse by Tags </a>
            </Link>
          </p>
        </section>
        <PostsContainer href="/writing" name="All Posts" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )
  const root = process.cwd()
  const rssPath = path.join(root, 'public', 'rss.xml')
  const rss = GenerateRSS(WritingData, 'rss.xml')
  fs.writeFileSync(rssPath, rss)
  return {
    props: {
      posts,
    },
  }
}
