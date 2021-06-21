import ProseLayout from '@/components/Layouts/ProseLayout'
import PostsContainer from '@/components/Posts/Container'
import Seo from '@/components/Seo'
import SectionContainer from '@/components/SectionContainer'
import { Environment } from '@/lib/environment'
import { getAllFilesFrontMatter, getAllTags } from '@/lib/mdx'
import { slugify } from '@/lib/utils'
import { GetStaticPaths, GetStaticProps } from 'next'
import Link from 'next/link'

/**
 *
 * Renders a single post by tag and loads all content.
 *
 */

export default function Tag({ posts, tag }) {
  const meta = {
    title: `${Environment.ogTitle} - ${tag}`,
    description: `Topics, Discussions and Thoughts about ${tag}`,
  }

  return (
    <SectionContainer>
      <ProseLayout>
        <Seo data={meta} />
        <div className="divide-y divide-gray-300 dark:divide-gray-700">
          <section className="flex flex-col mb-8 lg:mb-20 space-y-6">
            <h1 className="!mb-4">{tag}</h1>
            <p>
              Topics, guides and thoughts I wrote about <strong>{tag}</strong>{' '}
              or related to it. Please note that the list ordered by newest
              published articles, however some times I modify or update some
              info on older articles, I'll probably make some sort of
              filteration when I have time.
            </p>
            <p className="self-end">
              <Link href="/writing">
                <a className="mr-1 link-unstyled">Browse all Writing</a>
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let tag: string
  const { revalidate } = Environment.isr
  const allPosts = await getAllFilesFrontMatter('writing')

  const filteredPosts = allPosts.filter((post) =>
    post.tags.map((t: string) => slugify(t)).includes(params.tag)
  )

  if (filteredPosts.length) {
    tag = filteredPosts[0].tags.find((t: string) =>
      slugify(t).includes(params.tag as string)
    )
  }

  return {
    props: { posts: filteredPosts, tag: tag },
    revalidate: revalidate,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { tagCount } = await getAllTags('writing')
  if (!Object.keys(tagCount).length) return { paths: [], fallback: 'blocking' }
  return {
    paths: Object.keys(tagCount).map((tag) => ({
      params: {
        tag,
      },
    })),
    fallback: 'blocking',
  }
}
