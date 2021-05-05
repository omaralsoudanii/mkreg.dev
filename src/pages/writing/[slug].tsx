import MDXComponents from '@/components/MDXComponents'
import Post from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getAllFilesName, getFileBySlug } from '@/lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function MDXPost({ mdxSource, frontMatter }) {
  return (
    <Post frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('writing', params.slug)
  const { revalidate } = Environment.isr

  return {
    props: post,
    revalidate: revalidate,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesName('writing')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: 'blocking',
  }
}
