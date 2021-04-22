import Seo from '@/components/Seo'
import Tag from '@/components/Tag'
import { Environment } from '@/lib/environment'
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
      <div className="flex flex-col items-start justify-start divide-y-4 divide-gray-300 dark:divide-gray-700 sm:justify-center sm:items-center sm:divide-y-0 sm:flex-row sm:space-x-6 sm:mt-16">
        <div className="pt-6 space-x-2 space-y-5 sm:pb-8">
          <h1 className="px-2 mb-0 text-6xl leading-loose sm:px-6 sm:border-r-2">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap items-center justify-center max-w-lg px-2 py-6 sm:p-0 sm:justify-start sm:items-start">
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag name={tags[t]} slug={t} />
                <Link href={`/tags/${t}`}>
                  <a className="-ml-2 font-semibold text-gray-600 dark:text-gray-400">
                    {` (${tagCount[t]})`}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </article>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { revalidate } = Environment.isr
  const { tagCount, tags } = await getAllTags('writing')

  if (!Object.keys(tagCount).length) {
    return {
      notFound: true,
      revalidate: revalidate,
    }
  }

  return {
    props: {
      tagCount,
      tags,
    },
    revalidate: revalidate,
  }
}
