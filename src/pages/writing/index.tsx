import PostsList from '@/components/Posts/List'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/mdx'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const extraMeta = {
    title: 'Writing',
    description: 'Writing about programming, software & Vim vs Emacs.',
  }

  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col space-y-4">
            <h1>Writing</h1>
            <p className="text-title">
              Writing about programming, software & Vim vs Emacs.
            </p>
          </div>
          <div className=" hr-stroke" />
          <PostsList href="writing" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.publishedAt)) - Number(new Date(a.publishedAt))
  )

  const { revalidate } = Environment.isr
  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
