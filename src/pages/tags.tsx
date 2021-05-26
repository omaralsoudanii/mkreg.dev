import Seo from '@/components/Seo'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/mdx'
import { GetStaticProps } from 'next'

/**
 * Main Tags page
 *
 * Loads all tags
 *
 */

export default function Tags({ tagCount, tags }) {
  const meta = {
    title: `Omar Alsoudani - Tags`,
    description: `Browse my writings, discussions and thoughts by tags.`,
    JsonLd: false,
  }
  const sortedTags = Object.keys(tagCount).sort(
    (a, b) => tagCount[b] - tagCount[a]
  )

  return (
    <article>
      <Seo data={meta} />
      <section className="flex flex-col items-start justify-start divide-y divide-gray-900 dark:divide-gray-100 lg:justify-center lg:items-center lg:divide-y-0 lg:flex-row lg:space-x-6 lg:mt-24">
        <div className="py-4 lg:pt-6 lg:pb-8">
          <h1 className="title-heading lg:border-r-2 !mb-0 lg:px-6 lg:dark:border-gray-100 lg:border-gray-900">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg py-4 lg:py-0">
          {sortedTags.map((t) => (
            <Tag key={t} name={tags[t]} slug={t} count={tagCount[t]} />
          ))}
        </div>
      </section>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { tagCount, tags } = await getAllTags('writing')

  return {
    props: {
      tagCount,
      tags,
    },
  }
}
