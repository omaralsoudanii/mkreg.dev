import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/mdx'
import { slugify } from '@/lib/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const meta = {
    title: `${Environment.ogTitle} - ${tag}`,
    description: `Topics, Discussions and Thoughts about ${tag}`,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-8">
          <h1 className="!mb-4">{tag}</h1>
          <p>
            Topics, guides and thoughts I wrote about <strong>{tag}</strong> or
            related to it.
          </p>
          <p className="text-right text-secondary">
            <Link href="/writing">
              <a className="mr-1 link-unstyled">Browse all Writing</a>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let tag: string

  const allPosts = await getAllFilesFrontMatter('writing')

  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t: string) => slugify(t)).includes(params.tag)
  )

  if (filteredPosts.length) {
    tag = filteredPosts[0].tags.find((t: string) =>
      slugify(t).includes(params.tag as string)
    )
  }

  return {
    props: { posts: filteredPosts, tag: tag },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { enable } = Environment.isr
  const { tagCount } = await getAllTags('writing')
  if (!Object.keys(tagCount).length) return { paths: [], fallback: enable }
  return {
    paths: Object.keys(tagCount).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}
