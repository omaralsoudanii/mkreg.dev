import { GetStaticProps } from 'next'
import PostsContainer from '@/components/Posts/Container'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Seo from '@/components/Seo'
import { Container } from '@/components/Container'
import * as React from 'react'

function Home({ posts }) {
  return (
    <React.Fragment>
      <Seo data={{ JsonLd: false }} />
      <Container>
        <section className="mb-28">
          <h1>Hi, I’m Omar</h1>
          <p>
            I made this site to understand what the heck is Jamstack 🤔, then i
            got hooked reading about design. It seems like I will spend the next
            year reading about typography, fonts, colors. Hopefully by the next
            leap year this site will be launched with my first post!
          </p>
          <p>
            Should've just installed Ghost instead 🤦. Below is probably some
            dummy content to test teh CSS Skillz ( ͡° ͜ʖ ͡°)
          </p>
        </section>
        <PostsContainer href="/writing" name="Latest Writing" posts={posts} />
      </Container>
    </React.Fragment>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingMetadata = await getAllFilesFrontMatter('writing')
  const posts = WritingMetadata.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  ).slice(0, 5)

  return {
    props: {
      posts,
    },
  }
}

export default Home
