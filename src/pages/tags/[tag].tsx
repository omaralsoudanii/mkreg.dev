import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { getAllTags } from '@/lib/tags'
import { kebabCase } from '@/lib/utils'
import Link from 'next/link'
import Seo from '@/components/Seo'
import GenerateRSS from '@/lib/generate-rss'
import path from 'path'
import fs from 'fs'
import PostsContainer from '@/components/Posts/Container'
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
    <div className="container px-2 mx-auto leading-relaxed">
      <Seo data={meta} />
      <section className="mb-10 space-y-8">
        <h1>{`Writing about ${title}`}</h1>
        <p className="text-right">
          <Link href="/writing">
            <a className="text-link">Browse all writing &rarr; </a>
          </Link>
        </p>
      </section>
      <PostsContainer href="/writing" name={`${title} Writing`} posts={posts} />
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
