import Bookmarks from '@/lib/bookmarks'
import Seo from '@/components/Seo'
import * as React from 'react'
import Card from '@/components/Card'
import { Container } from '@/components/Container'

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
        <div className="space-y-8">
          <h1>Nuggets</h1>
          <p>
            Some stuff I bookmark to read later, or a tool I find useful to use.
            These recommendations are based on my opinion, doesn't mean they are
            necessary or must-read. Some of them are debatable, not facts. Feel
            free to peek into what might interest you, If you happen to see
            something misleading or plain wrong. Please contact me!
          </p>
          {Bookmarks.map((bookmark) => (
            <Card key={bookmark.title} {...bookmark} />
          ))}
        </div>
      </Container>
    </React.Fragment>
  )
}

export default Nuggets
