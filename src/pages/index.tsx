import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import PostsContainer from '@/components/Posts/Container'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import Seo from '@/components/Seo'

function Home({ posts }) {
  return (
    <div className="container px-2 mx-auto leading-relaxed">
      <Seo data={{ JsonLd: false }} />
      <section className="mb-28">
        <h1>Hi, I’m Omar</h1>
        <p>
          I made this site to understand what the heck is Jamstack 🤔, then i
          got hooked reading about design. It seems like I will spend the next
          year reading about typography, fonts, colors.
        </p>
        <p>
          Hopefully by the next leap year this site will be launched with my
          first post! Should've just installed Ghost instead 🤦. Below is
          probably some dummy content to test teh CSS Skillz ( ͡° ͜ʖ ͡°)
        </p>
      </section>
      <PostsContainer href="/writing" name="Latest Writing" posts={posts} />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingMetadata = await getAllFilesFrontMatter('writing')
  const posts = WritingMetadata.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  ).slice(0, 5)

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}

export default Home
