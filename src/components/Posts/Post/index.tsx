import Seo from '@/components/Seo'
import { slugify } from '@/lib/utils'
import dayjs from 'dayjs'
import Link from 'next/link'
import * as React from 'react'

export default function Post({ children, frontMatter }) {
  const meta = {
    title: frontMatter.title,
    description: frontMatter.summary,
    image: {
      url: frontMatter?.image,
      alt: frontMatter.title,
    },
    tags: frontMatter?.tags,
    JsonLd: true,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <article className="w-full max-w-2xl mx-auto mb-16 lg:max-w-3xl">
        <h1 className="!pb-4 !pt-0 !mt-0 !mb-1 text-center text-3xl  text-black md:text-4xl dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="grid grid-cols-1 mt-1 !mb-8 !py-2 lg:grid-cols-1">
          <div className="flex flex-wrap">
            {frontMatter.tags.map((t: string) => (
              <p key={t} className="pr-2 !my-0 !py-1">
                <Link href={`/tags/${slugify(t)}`}>
                  <a className="text-link">{t}</a>
                </Link>
              </p>
            ))}
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="px-0 !my-1 !py-1 text-tertiary">
              {`${dayjs(new Date(frontMatter.date)).format('MMMM DD, YYYY')}`}
            </p>
            {frontMatter.lastmod && (
              <p className="px-0 !my-1 !py-1 text-tertiary">
                {`Updated ${dayjs(new Date(frontMatter.lastmod)).format(
                  'MMMM DD, YYYY'
                )}`}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8 prose dark:prose-dark lg:prose-lg">{children}</div>
      </article>
    </React.Fragment>
  )
}
