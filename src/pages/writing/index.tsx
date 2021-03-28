import PostsList from '@/components/Posts/List'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import { GetStaticProps } from 'next'
import { getAllFilesFrontMatterMeta } from '@/lib/mdx'
import Heading from '@/components/Heading'

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
          <Heading
            title="Writing"
            subTitle="Writing about programming, software & Vim vs Emacs."
          />
          <div className=" hr-stroke" />
          <PostsList href="writing" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const WritingData = await getAllFilesFrontMatterMeta('writing')
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
