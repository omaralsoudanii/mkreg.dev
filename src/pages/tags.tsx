import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/ghost'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { Environment } from '@/lib/environment'
import { resolveUrl } from '@/lib/routing'
import { SEO } from '@/components/Seo/seo'

/**
 * Main Tags page
 *
 * Loads all tags
 *
 */

export default function Tags({ tags }) {
  const meta = {
    title: `Tags - ${Environment.ogTitle}`,
    description: `Explore - ${Environment.ogTitle}`,
  }
  const apiUrl = Environment.ghost.apiUrl
  return (
    <article>
      <SEO {...meta} />
      <div className="flex flex-col items-start justify-start divide-y divide-gray-300 dark:divide-gray-700 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-24">
        <div className="pt-16 space-x-2 sm:space-y-6">
          <h1 className="text-6xl leading-loose border-gray-900 sm:text-8xl sm:leading-loose sm:dark:border-gray-100 sm:border-r-8 sm:py-40 sm:px-6">
            Tags
          </h1>
        </div>
        <div className="flex flex-wrap max-w-md">
          {Object.keys(tags).length === 0 && 'No tags found.'}
          {tags.map((t) => {
            const url = resolveUrl({ apiUrl, slug: t.slug, url: t.url })
            return (
              <div key={t.slug} className="mt-2 mb-2 mr-5 text-lg sm:text-xl">
                <Tag url={url} text={t.name} />
                <Link href={`/tags/${url}`}>
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
  const tags = await getAllTags()
  const { revalidate } = Environment.isr
  return {
    props: {
      tags,
    },
    revalidate: revalidate,
  }
}
