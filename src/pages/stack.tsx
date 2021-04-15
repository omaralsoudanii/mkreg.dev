import MDXComponents from '@/components/MDXComponents'
import PostContainer from '@/components/Posts/Post'
import { Environment } from '@/lib/environment'
import { getPageFile } from '@/lib/mdx'
import hydrate from 'next-mdx-remote/hydrate'

function Stack({ mdxSource, frontMatter }) {
  const content = hydrate(mdxSource, {
    components: MDXComponents,
  })

  return <PostContainer frontMatter={frontMatter}>{content}</PostContainer>
}

export async function getStaticProps() {
  const post = await getPageFile('stack')
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
