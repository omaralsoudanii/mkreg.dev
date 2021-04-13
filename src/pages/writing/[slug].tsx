import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { formatSlug, getFileBySlug, getAllFilesName } from '@/lib/mdx'
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
  const { revalidate } = Environment.isr
  if (!post) {
    return {
      notFound: true,
      revalidate: revalidate,
    }
  }
  return { props: post }
}

export async function getStaticPaths() {
  const { enable } = Environment.isr
  const posts = await getAllFilesName('writing')
  if (!posts.length) return { paths: [], fallback: !enable }

  const paths = posts.map((p) => ({
    params: {
      slug: formatSlug(p),
    },
  }))

  return {
    paths,
    fallback: !enable,
  }
}
