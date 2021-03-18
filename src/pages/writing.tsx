import WritingList from '@/components/Writing/List'
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
        <div className="flex flex-col space-y-8 sm:items-start">
          <div className="flex flex-col items-start space-y-4 text-start">
            <h1>Writing</h1>
            <p className="text-2xl">
              Writing about programming, software & Vim vs Emacs.
            </p>
          </div>
          <div className=" hr-stroke" />
          <WritingList href="writing" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featured = await getAllFilesFrontMatter('writing')
  const posts = featured.sort(
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
