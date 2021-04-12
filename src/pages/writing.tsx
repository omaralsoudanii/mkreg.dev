import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { Environment } from '@/lib/environment'
import Link from 'next/link'
import Seo from '@/components/Seo'
import GenerateRSS from '@/lib/generate-rss'
import fs from 'fs'
import path from 'path'
import React from 'react'
import PostsContainer from '@/components/Posts/Container'
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
    <div className="container px-2 mx-auto leading-relaxed">
      <Seo data={meta} />
      <section className="mb-20 space-y-8">
        <h2>Writing</h2>
        <p>Writing about programming, software & Vim vs Emacs.</p>
        <p className="text-right">
          <Link href="/tags">
            <a className="text-link">Tags &rarr;</a>
          </Link>
        </p>
      </section>
      <PostsContainer href="/writing" name="All Posts" posts={posts} />
    </div>
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
  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
