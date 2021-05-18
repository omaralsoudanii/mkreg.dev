import MDXComponents from '@/components/MDXComponents'
import Post from '@/components/Posts/Post'
import { getFileBySlug } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

function Stack({ mdxSource, frontMatter }) {
  return (
    <Post frontMatter={frontMatter}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const post = await getFileBySlug('stack')
  return { props: post }
}

export default Stack
