import Link from 'next/link'
import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import PostsList from '@/components/Writing/PostsList'
import { getAllFilesFrontMatter } from '@/lib/mdx'

function Home({ posts }) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>Hello, I’m Omar</h1>
              <p className="text-2xl">
                A programmer who made this site out of bordem, I'll be writing
                about software & development in general, not sure about Frontend
                though 🤔
              </p>
              <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:text-center">
                <Link href="/about">
                  <a className="btn-primary btn-large">More about me</a>
                </Link>
                <a
                  href={Environment.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary btn-large"
                >
                  Follow me on Github
                </a>
              </div>
            </div>
          </div>
          <div className=" hr-stroke" />
          <PostsList href="writing" name="Recent Posts" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featured = await getAllFilesFrontMatter('writing')
  const posts = featured
    .sort(
      (a, b) =>
        Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
    )
    .slice(0, 5)

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}

export default Home
