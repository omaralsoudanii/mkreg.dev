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

  const Tags = () => (
    <div className="flex flex-row space-x-4 text-sm tracking-wide text-right">
      {frontMatter.tags.map((t: string) => (
        <p key={t}>
          <Link href={`/tags/${slugify(t)}`}>
            <a className="font-semibold text-gray-600 dark:text-gray-400">
              {t}
            </a>
          </Link>
        </p>
      ))}
    </div>
  )

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <div className="w-full py-8 space-y-4">
          <h1 className="!mb-0 text-center">{frontMatter.title}</h1>
          {Tags()}
          <time className="w-full text-right text-lt-darkest dark:text-dk-darkest">
            {`${dayjs(new Date(frontMatter.publishedAt)).format(
              'MMMM DD, YYYY'
            )}`}
          </time>
        </div>
        <div className="hr-stroke" />
        {children}
      </Container>
    </React.Fragment>
  )
}
