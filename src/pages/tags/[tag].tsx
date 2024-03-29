import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

import PostsList from '@/components/Layouts/PostsList'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/mdx'
import { slugify } from '@/lib/utils'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const meta = {
    title: `${Environment.ogTitle} - ${tag}`,
    description: `Topics, Discussions and Thoughts about ${tag}`,
  }

  return (
    <article
      id='skip'
      className='prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto'
    >
      <Seo data={meta} />
      <section className='flex flex-col mb-8 md:mb-20 space-y-6'>
        <header>
          <h1 className='page-heading !mb-0'>{tag}</h1>
        </header>
        <p>
          Topics, guides and thoughts I wrote about <strong>{tag}</strong> or related to it. Please
          note that the list ordered by newest published articles, however some times I modify or
          update some info on older articles, I'll probably make some sort of filteration when I
          have time.
        </p>
        <p className='self-end'>
          <Link href='/writing'>
            <a className='mr-1 primary-link'>Browse all Writing</a>
          </Link>
        </p>
      </section>
      <section className='mt-8'>
        <PostsList href='/writing' posts={posts} />
      </section>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let tag: string

  const allPosts = await getAllFilesFrontMatter('writing')

  const filteredPosts = allPosts
    .filter((post) => post.tags.map((t: string) => slugify(t)).includes(params.tag))
    .map((post) => {
      return {
        title: post.title,
        date: post.date,
        summary: post.summary,
        slug: encodeURIComponent(post.slug),
        tags: post.tags,
      }
    })

  if (filteredPosts.length) {
    tag = filteredPosts[0].tags.find((t: string) => slugify(t).includes(params.tag as string))
  }

  return {
    props: { posts: filteredPosts, tag: tag },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { tagCount } = await getAllTags('writing')
  return {
    paths: Object.keys(tagCount).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: false,
  }
}
