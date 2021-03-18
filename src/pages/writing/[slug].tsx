import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Writing/Post'
import { Environment } from '@/lib/environment'
import { formatSlug, getFileBySlug, getFiles } from '@/lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function Post({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return <PostContainer frontMatter={frontMatter}>{content}</PostContainer>
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('writing', params.slug)
  if (!post) {
    return {
      notFound: true,
    }
  }
  const { revalidate } = Environment.isr
  return { props: post, revalidate: revalidate }
}

export async function getStaticPaths() {
  const { enable } = Environment.isr
  const posts = await getFiles('writing')
  if (!posts.length) return { paths: [], fallback: enable }

  const paths = posts.map((p) => ({
    params: {
      slug: formatSlug(p),
    },
  }))

  return {
    paths,
    fallback: enable && 'blocking',
  }
}
