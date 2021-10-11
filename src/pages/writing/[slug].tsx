import { useMemo } from 'react'

import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'

import Card from '@/components/Card'
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
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = useMemo(() => getMDXComponent(code, { Card: Card }), [code])
  return (
    <Post frontMatter={frontMatter} prev={prev} next={next}>
      <Component components={MDXComponents as ComponentMap} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allFrontMatter = await getAllFilesFrontMatter('writing')
  const allPosts = allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
  const postIndex = allPosts.findIndex((post) => formatSlug(post.slug) === params.slug)
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  if (prev) prev.path = '/writing'
  if (next) next.path = '/writing'
  const post = await getFileBySlug('writing', params.slug)
  post.frontMatter.slug = encodeURIComponent(post.frontMatter.slug)
  return {
    props: {
      post,
      prev: prev
        ? {
            slug: encodeURIComponent(prev.slug),
            path: prev.path,
            title: prev.title,
          }
        : null,
      next: next
        ? {
            slug: encodeURIComponent(next.slug),
            path: next.path,
            title: next.title,
          }
        : null,
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
