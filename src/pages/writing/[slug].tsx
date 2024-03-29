import { useMemo } from 'react'

import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'

import Post from '@/components/Layouts/Post'
import MDXComponents from '@/components/MDXComponents'
import { getAllFilesName, getFileBySlug, getAllFilesFrontMatter } from '@/lib/mdx'
import { dateSortDesc, formatSlug } from '@/lib/utils'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function MDXPost({ post, prev, next }) {
  const { code, frontMatter } = post

  const meta = {
    title: `Omar Alsoudani - ${frontMatter.title}`,
    description: frontMatter.summary,
    image: {
      url: frontMatter?.image,
      alt: frontMatter.title,
    },
    tags: frontMatter.tags,
    JsonLd: true,
  }

  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = useMemo(() => getMDXComponent(code), [code])
  return (
    <Post frontMatter={frontMatter} meta={meta} prev={prev} next={next}>
      <Component components={MDXComponents as ComponentMap} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allFrontMatter = await getAllFilesFrontMatter('writing')
  const allPosts = allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))

  const slugQuery = encodeURIComponent(params.slug as string)
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === slugQuery)

  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null

  const post = await getFileBySlug('writing', params.slug)

  post.frontMatter.path = `writing/${post.frontMatter.slug}`

  return {
    props: {
      post,
      prev: prev ? { path: `/writing/${prev.slug}`, title: prev.title } : null,
      next: next ? { path: `/writing/${next.slug}`, title: next.title } : null,
    },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesName('writing')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}
