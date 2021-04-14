import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Environment } from '@/lib/environment'
import Seo from '@/components/Seo'

/**
 * Main Tags page
 *
 * Loads all tags
 *
 */

export default function Tags({ tags }) {
  const meta = {
    title: `Tags - ${Environment.ogTitle}`,
    description: `Browse Writing by tags - ${Environment.ogTitle}`,
    JsonLd: false,
  }
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

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
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5">
                <Tag slug={t} />
                <Link href={`/tags/${t}`}>
                  <a className="-ml-2 font-semibold text-gray-600 dark:text-gray-400">
                    {` (${tags[t]})`}
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
  const tags = await getAllTags('writing')
  return {
    props: {
      tags,
    },
  }
}
