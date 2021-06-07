import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import dayjs from 'dayjs'
import * as React from 'react'

export default function Post({ children, frontMatter }) {
  const meta = {
    title: `Omar Alsoudani - ${frontMatter.title}`,
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
        <header>
          <h1 className="!py-0 !mb-16 text-center">{frontMatter.title}</h1>
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
      </Container>
    </React.Fragment>
  )
}
