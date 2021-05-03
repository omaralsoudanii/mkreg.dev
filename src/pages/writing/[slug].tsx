import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getAllFilesName, getFileBySlug } from '@/lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function Post({ mdxSource, frontMatter }) {
  const content = (
    <MDXRemote
      {...mdxSource}
      components={{
        ...MDXComponents,
      }}
    />
  )

  return <PostContainer frontMatter={frontMatter}>{content}</PostContainer>
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await getFileBySlug('writing', params.slug)
  const { revalidate } = Environment.isr

  if (!post) {
    return {
      notFound: true,
      revalidate: revalidate,
    }
  }
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
    fallback: false,
  }
}
