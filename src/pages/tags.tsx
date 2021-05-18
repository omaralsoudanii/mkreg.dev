import Seo from '@/components/Seo'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'

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
      <section className="flex flex-col items-center divide-y-2 divide-gray-700 dark:divide-gray-400 md:justify-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-16">
        <div className="pt-6 space-x-2 space-y-5 md:pb-8">
          <h1 className="px-2 mb-0 text-6xl leading-loose md:px-6 md:border-gray-900 md:dark:border-gray-50 md:border-r-2">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-lg px-2 py-6 md:p-0 md:justify-start md:items-start">
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag name={tags[t]} slug={t} />
                <Link href={`/tags/${t}`}>
                  <a className="-ml-2 text-gray-600 link-lg dark:text-gray-400">
                    {` (${tagCount[t]})`}
                  </a>
                </Link>
              </div>
            )
          })}
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
