import * as React from 'react'

import { ComponentMap, getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'

import Card from '@/components/Card'
import Post from '@/components/Layouts/Post'
import MDXComponents from '@/components/MDXComponents'
import { getAllFilesName, getFileBySlug } from '@/lib/mdx'
import { formatSlug } from '@/lib/utils'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function MDXPost({ post, parentPost }) {
  const { code, frontMatter } = post
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(
    () => getMDXComponent(code, { Card: Card }),
    [code]
  )
  return (
    <Post frontMatter={frontMatter} parentPost={parentPost}>
      <Component components={MDXComponents as ComponentMap} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('writing/linux-commands', params.slug)
  const parentPost = {
    title: 'Linux commands for me',
    path: 'writing/linux-commands',
  }
  return {
    props: { post, parentPost },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesName('writing/linux-commands')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}
