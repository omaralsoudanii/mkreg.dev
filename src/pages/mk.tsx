import WritingList from '@/components/Writing/List'
import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import { Environment } from '@/lib/environment'
import { GetStaticProps } from 'next'
import { getAllFilesFrontMatter } from '@/lib/mdx/api'
import Image from 'next/image'
/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const extraMeta = {
    title: 'MK',
    description: 'Mark Knopflar OBE',
  }

  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col items-center space-y-4 text-center">
              <h1>The Sultan of swing</h1>
              <p className="text-2xl">Mark Knopflar OBE</p>
              <Image
                src="/static/images/mk.jpg"
                width="800"
                height="534"
                quality={80}
                layout="responsive"
              />
            </div>
          </div>
          <WritingList href="mk" posts={posts} />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const featured = await getAllFilesFrontMatter('mk')
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
