import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import { kebabCase } from '@/lib/utils'
import PostsList from '@/components/Posts/List'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import Heading from '@/components/Heading'
import Link from 'next/link'
/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const extraMeta = {
    title: `${tag} - ${Environment.ogTitle}`,
    description: `${tag} Writing - ${Environment.ogTitle}`,
  }
  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col items-start space-y-8">
          <Heading title={title} />
          <Link href="/writing">
            <a className="text-link">&larr; Writing</a>
          </Link>
          <div className=" hr-stroke" />
          <PostsList href="writing" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('writing')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )
  const { revalidate } = Environment.isr
  return {
    props: { posts: filteredPosts, tag: params.tag },
    revalidate: revalidate,
  }
}

export async function getStaticPaths() {
  const { enable } = Environment.isr
  const tags = await getAllTags('writing')
  if (!Object.keys(tags).length) return { paths: [], fallback: enable }
  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: enable && 'blocking',
  }
}
