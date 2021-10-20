import React from 'react'

import { GetStaticProps } from 'next'

import Card from '@/components/Card'
import Seo from '@/components/Seo'
import { BookmarkIcon } from '@/lib/bookmarks'
import { getBookmarks } from '@/lib/planetscale'

function Nuggets({ posts }) {
  const meta = {
    title: 'Omar Alsoudani - Nuggets',
    description: 'Resources and bookmarks for the readers',
    JsonLd: false,
  }

  return (
    <article
      id='skip'
      className='prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto'
    >
      <Seo data={meta} />

      <section className='mb-8 md:mb-16'>
        <header>
          <h1 className='page-heading !mb-4'>Nuggets</h1>
        </header>
        <p>
          Some stuff I bookmark to read later, or a tool I find useful to use. These recommendations
          are based on my opinion. Feel free to peek into what might interest you. If you happen to
          see something misleading or plain wrong, please contact me
        </p>
      </section>
      <section>
        {posts.map((post: { title: string; desc: string; url: string; icon: string }) => (
          <Card
            key={post.title}
            title={post.title}
            desc={post.desc}
            url={post.url}
            Icon={BookmarkIcon(post.icon)}
          />
        ))}
      </section>
    </article>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const data = await getBookmarks()
  const posts = data.map((bookmark) => {
    return {
      title: bookmark.title,
      desc: bookmark.desc,
      url: bookmark.url,
      icon: bookmark.icon,
    }
  })

  return {
    props: {
      posts,
    },
  }
}
export default Nuggets
