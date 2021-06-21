import MDXComponents from '@/components/MDXComponents'
import Post from '@/components/Posts/Post'
import {
  getAllFilesName,
  getFileBySlug,
  getAllFilesFrontMatter,
} from '@/lib/mdx'
import { dateSortDesc, formatSlug } from '@/lib/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import { MDXRemote } from 'next-mdx-remote'

/**
 *
 * Renders a single post and loads all content.
 *
 */

export default function MDXPost({ post, prev, next }) {
  const { mdxSource, frontMatter } = post
  return (
    <Post frontMatter={frontMatter} prev={prev} next={next}>
      <MDXRemote {...mdxSource} components={MDXComponents} />
    </Post>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const allFrontMatter = await getAllFilesFrontMatter('writing')
  const allPosts = allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date))
  const postIndex = allPosts.findIndex(
    (post) => formatSlug(post.slug) === params.slug
  )
  const prev = allPosts[postIndex + 1] || null
  const next = allPosts[postIndex - 1] || null
  const post = await getFileBySlug('writing', params.slug)

  return {
    props: { post, prev, next },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllFilesName('writing')

  return {
    paths: posts.map((p) => ({
      params: {
        slug: formatSlug(p),
      },
    })),
    fallback: false,
  }
}
