import Page from '@/components/Page'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import { kebabCase } from '@/lib/utils'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Environment } from '@/lib/environment'

/**
 * Main Tags page
 *
 * Loads all tags
 *
 */

export default function Tags({ tags }) {
  const extraMeta = {
    title: `Tags - ${Environment.ogTitle}`,
    description: `Explore my writing by tags - ${Environment.ogTitle}`,
  }
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <Page extraMeta={extraMeta}>
      <div className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-6 pb-8 space-x-2 md:space-y-5">
          <h1 className="text-6xl font-extrabold md:border-r-2 md:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5 text-2xl">
                <Tag text={t} />
                <Link href={`/tags/${kebabCase(t)}`}>
                  <a className="-ml-2 font-semibold text-gray-600 uppercase dark:text-gray-400">
                    {` (${tags[t]})`}
                  </a>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </Page>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const tags = await getAllTags('writing')
  const { revalidate } = Environment.isr
  return {
    props: {
      tags,
    },
    revalidate: revalidate,
  }
}
