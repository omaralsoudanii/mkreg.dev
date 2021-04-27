import { Container } from '@/components/Container'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import * as React from 'react'

function Home({ posts }) {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software developer, creator & the king of laziness.',
    JsonLd: false,
  }
  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20">
          <h1>Hi, I’m Omar</h1>
          <p>
            I made this site to understand what the heck is Jamstack 🤔, then I
            got hooked reading about design. It seems like I will spend the next
            year reading about Typography, Fonts, Colors. Hopefully by the next
            leap year this site will be launched with my first post!
          </p>
          <p>
            My goals for this site is to be my digital identity, where I can
            write notes, share my knowledge with others, my opinion on some
            topics. Open source projects I create & share them here, maybe with
            a playground or proof of concept.
          </p>
          <ul className="space-y-4 leading-relaxed">
            <li>
              <Link href="/about">
                <a className="text-link">More about me </a>
              </Link>
            </li>
            <li>
              <Link href="/writing">
                <a className="text-link">Stuff I wrote </a>
              </Link>
            </li>
            <li>
              <Link href="/nuggets">
                <a className="text-link">Nuggets</a>
              </Link>
            </li>
          </ul>
        </section>
        <PostsContainer href="/writing" name="Featured Writing" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { revalidate } = Environment.isr
  const Writing = await getAllFilesFrontMatter('writing')
  const posts = Writing.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  ).slice(0, 5)

  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}

export default Home
