import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import { kebabCase } from '@/lib/utils'
import PostsList from '@/components/Posts/List'
import Heading from '@/components/Heading'
import Link from 'next/link'
import Seo from '@/components/Seo'
import GenerateRSS from '@/lib/generate-rss'
import path from 'path'
import fs from 'fs'
/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const title = tag[0].toUpperCase() + tag.split(' ').join('-').slice(1)
  const meta = {
    title: `${tag} - ${Environment.ogTitle}`,
    description: `${title} writing - ${Environment.ogTitle}`,
  }

  return (
    <div className="flex flex-col items-start space-y-8">
      <Seo data={meta} />
      <Heading title={title} />
      <Link href="/writing">
        <a className="text-base sm:text-lg text-link">&larr; Writing</a>
      </Link>
      <div className=" hr-stroke" />
      <PostsList href="/writing" posts={posts} />
    </div>
  )
}

export async function getStaticProps({ params }) {
  const allPosts = await getAllFilesFrontMatter('writing')
  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t) => kebabCase(t)).includes(params.tag)
  )
  const root = process.cwd()
  const rss = GenerateRSS(filteredPosts, `tags/${params.tag}/index.xml`)
  const rssPath = path.join(root, 'public', 'tags', params.tag)
  fs.mkdirSync(rssPath, { recursive: true })
  fs.writeFileSync(path.join(rssPath, 'index.xml'), rss)
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
