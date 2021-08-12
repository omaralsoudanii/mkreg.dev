import { GetStaticProps } from 'next'
import Link from 'next/link'

import PostsList from '@/components/Layouts/PostsList'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
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
      id="skip"
      className="prose dark:prose-dark md:prose-lg w-full max-w-none md:max-w-[75ch] mx-auto"
    >
      <Seo data={meta} />
      <section className="flex flex-col mb-8 md:mb-20 space-y-6">
        <header>
          <h1 className="page-heading !mb-0">Writing</h1>
        </header>
        <p>
          Stuff I write about programming and software development with a slight
          hint of salt. Please note that the list ordered by newest published
          articles, however some times I modify or update some info on older
          articles, I'll probably make some sort of filteration when I have
          time.
        </p>
        <p className="self-end">
          <Link href="/tags">
            <a className="mr-1 primary-link">Browse by Tags</a>
          </Link>
        </p>
      </section>
      <section>
        <PostsList href="/writing" posts={posts} />
      </section>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return {
    props: {
      posts,
    },
    revalidate: Environment.isr.revalidate,
  }
}
