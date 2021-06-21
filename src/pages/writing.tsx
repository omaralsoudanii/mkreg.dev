import ProseLayout from '@/components/Layouts/ProseLayout'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import SectionContainer from '@/components/SectionContainer'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'

/**
 * Main writing page
 *
 * Loads all posts from MDX
 *
 */

export default function Writing({ posts }) {
  const meta = {
    title: 'Omar Alsoudani - Writing',
    description: 'Writing about programming, software and Vim vs Emacs.',
    JsonLd: false,
  }

  return (
    <SectionContainer>
      <ProseLayout>
        <Seo data={meta} />
        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          <section className="flex flex-col mb-8 lg:mb-20 space-y-6">
            <h1 className="!mb-0">Writing</h1>
            <p>
              Stuff I write about programming, software with a slight hint of
              salt. Please note that the list ordered by newest published
              articles, however some times I modify or update some info on older
              articles, I'll probably make some sort of filteration when I have
              time.
            </p>
            <p className="self-end">
              <Link href="/tags">
                <a className="mr-1 link-unstyled">Browse by Tags</a>
              </Link>
            </p>
          </section>
          <section>
            <PostsContainer href="/writing" posts={posts} />
          </section>
        </div>
      </ProseLayout>
    </SectionContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { revalidate } = Environment.isr
  const WritingData = await getAllFilesFrontMatter('writing')
  const posts = WritingData.sort(
    (a, b) => Number(new Date(b.date)) - Number(new Date(a.date))
  )

  return {
    props: {
      posts,
    },
    revalidate: revalidate,
  }
}
