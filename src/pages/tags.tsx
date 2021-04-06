import * as React from 'react'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/tags'
import { kebabCase } from '@/lib/utils'
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
    description: `Explore my writing by tags - ${Environment.ogTitle}`,
  }
  const sortedTags = Object.keys(tags).sort((a, b) => tags[b] - tags[a])

  return (
    <article>
      <Seo data={meta} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-300 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-16 space-x-2 sm:space-y-6">
          <h1 className="text-6xl leading-loose border-gray-900 sm:text-8xl sm:leading-loose sm:dark:border-gray-100 sm:border-r-8 sm:py-40 sm:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-lg">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {sortedTags.map((t) => {
            return (
              <div key={t} className="mt-2 mb-2 mr-5 text-lg sm:text-xl">
                <Tag text={t} />
                <Link href={`/tags/${kebabCase(t)}`}>
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
  const { revalidate } = Environment.isr
  return {
    props: {
      tags,
    },
    revalidate: revalidate,
  }
}
