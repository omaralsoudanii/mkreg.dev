import { Container } from '@/components/Container'
import Image from '@/components/ImageComposed'
import Seo from '@/components/Seo'
import dayjs from 'dayjs'
import * as React from 'react'

function Nuggets() {
  const meta = {
    title: 'Nuggets',
    description: 'Recommended resources to read',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20 space-y-8">
          <h1>Nuggets</h1>
          <p>
            Some stuff I bookmark and never read again. Content is not ready
            yet.
          </p>
          <p>
            <strong>ETA:</strong> about ~1 year from{' '}
            {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
          </p>
          <Image
            src="/static/images/under-construction.jpg"
            alt="Omar Alsoudani bookmarks"
            width={2048}
            height={1357}
          />
        </section>
      </Container>
    </React.Fragment>
  )
}

export default Nuggets
