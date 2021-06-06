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
      <article
        id="skip"
        className="w-full mx-auto mt-6 mb-16 prose dark:prose-dark lg:prose-lg max-w-prose"
      >
        <header>
          <h1 className="!py-0 !mb-16 text-center title-heading !mt-2">
            {frontMatter.title}
          </h1>
        </header>
        <div className="flex flex-row justify-between my-0">
          <p className="px-0 !my-1 text-[0.9rem] lg:text-base !py-1 text-tertiary">
            {`${dayjs(new Date(frontMatter.date)).format('MMMM DD, YYYY')}`}
          </p>
          {frontMatter.lastmod && (
            <p className="px-0 !my-1 text-[0.9rem] lg:text-base !py-1 text-tertiary">
              {`Updated ${dayjs(new Date(frontMatter.lastmod)).format(
                'MMMM DD, YYYY'
              )}`}
            </p>
          )}
        </div>
        <div className="mx-auto mt-6">{children}</div>
        <h2 className="!font-medium !py-0 !mt-12 !mb-4">Tags</h2>
        <div className="flex flex-wrap">
          {frontMatter.tags.map((t: string) => (
            <p key={t} className="pr-4 !my-0 !py-1">
              <Link href={`/tags/${slugify(t)}`}>
                <a className="text-link">{t}</a>
              </Link>
            </p>
          ))}
        </div>
      </article>
    </React.Fragment>
  )
}
