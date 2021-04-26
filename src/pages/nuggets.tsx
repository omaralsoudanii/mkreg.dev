import BookmarkList from '@/components/Bookmark/list'
import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import * as React from 'react'

function Nuggets() {
  const meta = {
    title: 'Omar Alsoudani - Nuggets',
    description: 'Resources and bookmarks for the readers',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-8 space-y-8">
          <h1>Nuggets</h1>
          <p>
            Some stuff I bookmark to read later, or a tool i find usefull to use
            to use. These recommendations are based on my opinion, doesn't mean
            they are necessary or must read. Some them are debatable, not a
            facts. Feel free to peek into what might interest you, If you happen
            to see something misleading or plain wrong. Please contact me!
          </p>
        </section>
        <section className="mt-8 space-y-8">{BookmarkList()}</section>
      </Container>
    </React.Fragment>
  )
}

export default Nuggets
