import Link from 'next/link'
import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import PostsContainer from '@/components/Posts/PostsList'
import { getAllFilesFrontMatterMeta } from '@/lib/mdx'
import Heading from '@/components/Heading'

function Home({ posts }) {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col items-start space-y-8 sm:items-center sm:text-center">
            <Heading
              title="Hi, I’m Omar."
              subTitle="I made this site to understand what the heck is Jamstack 🤔. It's a work in progress!"
            />
            <div className="flex flex-col w-full space-y-4 sm:space-x-4 sm:flex-row sm:w-max sm:space-y-0">
              <Link href="/about">
                <a className="btn-primary btn-large">More about me</a>
              </Link>
              <a
                href={Environment.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary btn-large"
              >
                Reach me via LinkedIn
              </a>
            </div>
          </div>
          <div className=" hr-stroke" />
          <PostsContainer href="writing" name="Recent" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingMetadata = await getAllFilesFrontMatterMeta('writing')
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
