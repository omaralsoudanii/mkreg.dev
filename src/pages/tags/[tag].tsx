import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/mdx'
import { slugify, unSlugify } from '@/lib/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const title = unSlugify(tag)
  const meta = {
    title: `${Environment.ogTitle} - ${title}`,
    description: `Topics, Discussions & Thoughts about ${title}`,
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
              <a className="text-link">Browse all writing &rarr;</a>
            </Link>
          </p>
        </section>
        <PostsContainer href="/writing" name="All Posts" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { revalidate } = Environment.isr
  const allPosts = await getAllFilesFrontMatter('writing')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t: string) => slugify(t)).includes(params.tag)
  )

  return {
    props: { posts: filteredPosts, tag: params.tag },
    revalidate: revalidate,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable } = Environment.isr
  const tags = await getAllTags('writing')
  if (!Object.keys(tags).length) return { paths: [], fallback: enable }
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: enable,
  }
}
