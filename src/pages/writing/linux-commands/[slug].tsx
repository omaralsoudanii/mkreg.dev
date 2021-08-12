import * as React from 'react'

import { getMDXComponent } from 'mdx-bundler/client'
import { GetStaticPaths, GetStaticProps } from 'next'

import Post from '@/components/Layouts/Post'
import MDXComponents from '@/components/MDXComponents'
import { Environment } from '@/lib/environment'
import { getAllFilesName, getFileBySlug } from '@/lib/mdx'
import { formatSlug } from '@/lib/utils'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function MDXPost({ post, parentPost }) {
  const { mdxSource, frontMatter } = post
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = React.useMemo(() => getMDXComponent(mdxSource), [mdxSource])
  return (
    <Post frontMatter={frontMatter} parentPost={parentPost}>
      <Component components={MDXComponents as any} />
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
    props: { post, parentPost, revalidate: Environment.isr.revalidate },
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
    fallback: Environment.isr.enable ? 'blocking' : false,
  }
}
