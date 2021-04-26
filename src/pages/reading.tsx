import BookmarkList from '@/components/Bookmark/list'
import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import * as React from 'react'

function Reading() {
  const meta = {
    title: 'Omar Alsoudani - Reading',
    description: 'Resources for the readers',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-8 space-y-8">
          <h1>Reading</h1>
          <p>Some stuff I bookmark to read later.</p>
        </section>
      </Container>
      <section className="mt-8 space-y-8">{BookmarkList()}</section>
    </React.Fragment>
  )
}

export default Reading
