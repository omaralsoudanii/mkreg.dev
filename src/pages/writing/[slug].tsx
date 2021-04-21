import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getAllFilesName, getFileBySlug } from '@/lib/mdx'
import { GetStaticPaths, GetStaticProps } from 'next'
import hydrate from 'next-mdx-remote/hydrate'
import { useRouter } from 'next/router'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function Post({ mdxSource, frontMatter }) {
  const router = useRouter()
  if (router.isFallback) return <p>No posts...</p>
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

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
  const { enable } = Environment.isr
  const posts = await getAllFilesName('writing')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, ''),
      },
    })),
    fallback: enable,
  }
}
