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
      </article>
      <div className="w-full mx-auto !my-0 prose dark:prose-dark lg:prose-lg max-w-prose">
        <h3 className="text-primary !py-0 !my-1">Writings with similar tags</h3>
        <ul className="!mt-0 !mb-6">
          {frontMatter.tags.map((t: string) => (
            <li key={t}>
              <Link href={`/tags/${slugify(t)}`}>
                <a className="text-link text-[0.9rem] inline w-auto lg:text-base">
                  {t}
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex flex-col w-auto mx-auto mt-4 space-y-2 align-baseline">
          <p>
            <Link href="/writings">
              <a className="link-unstyled"> Browse all Writings</a>
            </Link>
          </p>

          <p>
            <Link href="/tags">
              <a className="link-unstyled"> Browse by Tags</a>
            </Link>
          </p>
        </div>
      </div>
    </React.Fragment>
  )
}
