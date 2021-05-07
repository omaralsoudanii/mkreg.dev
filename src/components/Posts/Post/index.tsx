import { Container } from '@/components/Container'
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
      <Container>
        <h1 className="!py-4 !mb-1 text-center"> {frontMatter.title}</h1>
        <div className="grid grid-cols-1 mt-1 md:grid-cols-1">
          <p className="!mt-1 !mb-4 !py-2 !font-medium">
            {frontMatter.summary}
          </p>
          <div className="flex flex-wrap">
            {frontMatter.tags.map((t: string) => (
              <p key={t} className="pr-2 text-base !my-0 !py-1">
                <Link href={`/tags/${slugify(t)}`}>
                  <a className="text-link">{t}</a>
                </Link>
              </p>
            ))}
          </div>
          <div className="flex flex-row justify-between mt-4">
            <p className="px-0 !my-1 text-base !py-1 text-gray-600 dark:text-gray-400">
              {`${dayjs(new Date(frontMatter.date)).format('MMMM DD, YYYY')}`}
            </p>
            {frontMatter.lastmod && (
              <p className="px-0 !my-1 text-base !py-1 text-gray-600 dark:text-gray-400">
                {`Updated on ${dayjs(new Date(frontMatter.lastmod)).format(
                  'MMMM DD, YYYY'
                )}`}
              </p>
            )}
          </div>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </React.Fragment>
  )
}
