import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
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
        <header className="mb-3 text-center">
          <h1>{frontMatter.title}</h1>
        </header>
        {children}
      </Container>
    </React.Fragment>
  )
}
