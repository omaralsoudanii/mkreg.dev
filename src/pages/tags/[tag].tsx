import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import { slugify, unSlugify } from '@/lib/utils'
import Link from 'next/link'
import Seo from '@/components/Seo'
import GenerateRSS from '@/lib/generate-rss'
import path from 'path'
import fs from 'fs'
import PostsContainer from '@/components/Posts/Container'
import { Container } from '@/components/Container'
import * as React from 'react'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const title = unSlugify(tag)
  const meta = {
    title: `${title} - ${Environment.ogTitle}`,
    description: `Topics, guides and thoughts I wrote about ${title} or related to it - ${Environment.ogTitle}`,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20 space-y-8">
          <h1>{title}</h1>
          <p>
            Topics, guides and thoughts I wrote about <strong>{title}</strong>{' '}
            or related to it.
          </p>
          <p className="text-right">
            <Link href="/writing">
              <a className="text-link">Browse all writing </a>
            </Link>
          </p>
        </section>
        <PostsContainer href="/writing" name="All Posts" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('writing')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => slugify(t)).includes(params.tag)
  )
  const root = process.cwd()
  const rss = GenerateRSS(filteredPosts, `tags/${params.tag}/index.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'index.xml'), rss)
  return {
    props: { posts: filteredPosts, tag: params.tag },
  }
}

export async function getStaticPaths() {
  const { enable } = Environment.isr
  const tags = await getAllTags('writing')
  if (!Object.keys(tags).length) return { paths: [], fallback: !enable }
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: !enable,
  }
}
