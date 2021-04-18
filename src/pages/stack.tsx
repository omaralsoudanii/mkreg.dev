import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import hydrate from 'next-mdx-remote/hydrate'

function Stack({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return <PostContainer frontMatter={frontMatter}>{content}</PostContainer>
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('stack')
  const { revalidate } = Environment.isr
  if (!post) {
    return {
      notFound: true,
      revalidate: revalidate,
    }
  }
  return { props: post }
}

export default Stack
