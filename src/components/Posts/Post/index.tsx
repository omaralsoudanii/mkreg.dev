import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import { slugify } from '@/lib/utils'
import dayjs from 'dayjs'
import Link from 'next/link'
import * as React from 'react'

export default function PostContainer({ children, frontMatter }) {
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
        <h1 className="!py-4 !m-0 text-center"> {frontMatter.title}</h1>
        <div className="grid grid-cols-1 mt-1 md:grid-cols-1">
          <p className="px-0 !my-1 !py-1 text-gray-600 dark:text-gray-400">
            {`${dayjs(new Date(frontMatter.date)).format('MMMM DD, YYYY')}`}
          </p>
          <div className="flex flex-wrap">
            {frontMatter.tags.map((t: string) => (
              <p key={t} className="pr-2 !my-1 !py-1">
                <Link href={`/tags/${slugify(t)}`}>
                  <a className="text-link">{t}</a>
                </Link>
              </p>
            ))}
          </div>
          <p>{frontMatter.summary}</p>
        </div>
        <div className="mt-8">{children}</div>
      </Container>
    </React.Fragment>
  )
}
