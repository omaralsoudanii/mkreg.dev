import { GetStaticProps } from 'next'
import Link from 'next/link'

import PostsList from '@/components/Layouts/PostsList'
import Seo from '@/components/Seo'
import { getAllFilesFrontMatter } from '@/lib/mdx'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const meta = {
    title: 'Omar Alsoudani - Writing',
    description: 'Writing about programming, software and Vim vs Emacs.',
    JsonLd: false,
  }

  return (
    <article
      id='skip'
      className='prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto mb-8 md:mb-16'
    >
      <Seo data={meta} />
      <section className='mb-8 space-y-8 md:mb-16'>
        <header>
          <h1 className='page-heading !mb-4'>Writing</h1>
        </header>
        <p>
          Stuff I write about programming and software development with a slight hint of salt.
          Please note that the list ordered by newest published articles, however some times I
          modify or update some info on older articles, I'll probably make some sort of filteration
          when I have time.
        </p>
        <p className='text-right'>
          <Link href='/tags'>
            <a className='mr-1 primary-link'>Browse by Tags</a>
          </Link>
        </p>
      </section>
      <section className='mt-8'>
        <PostsList href='/writing' posts={posts} />
      </section>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).map(
    (post) => {
      return {
        title: post.title,
        date: post.date,
        summary: post.summary,
        slug: post.slug,
      }
    }
  )

  return {
    props: {
      posts,
    },
  }
}
