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

  const Meta = () => (
    <div className="grid grid-cols-1 mt-1 mb-8 sm:grid-cols-1">
      <p className="px-2 !mb-1 text-base font-medium text-black dark:text-gray-100">
        {`${dayjs(new Date(frontMatter.publishedAt)).format('MMMM DD, YYYY')}`}
      </p>
      <div className="flex flex-wrap">
        {frontMatter.tags.map((t: string) => (
          <p key={t} className="px-2 !mt-1 text-base">
            <Link href={`/tags/${slugify(t)}`}>
              <a className="text-link">{t}</a>
            </Link>
          </p>
        ))}
      </div>
    </div>
  )

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <header className="text-center">
          <h1> {frontMatter.title}</h1>
        </header>
        {Meta()}
        {children}
      </Container>
    </React.Fragment>
  )
}
