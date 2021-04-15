import { Container } from '@/components/Container'
import Image from '@/components/ImageComposed'
import Seo from '@/components/Seo'
import dayjs from 'dayjs'
import * as React from 'react'

function Stack() {
  const meta = {
    title: 'Stack',
    description: 'Omar Alsoudani tech stack',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section className="mb-20 space-y-8">
          <h1>Stack</h1>
          <p>A list of what I know about tech. Content is not ready yet.</p>
          <p>
            <strong>ETA:</strong> about ~1 year from{' '}
            {`${dayjs(new Date()).format('MMMM DD, YYYY')}`}
          </p>
          <Image
            src="/static/images/under-construction.jpg"
            alt="Omar Alsoudani stack"
            width={2048}
            height={1357}
          />
        </section>
      </Container>
    </React.Fragment>
  )
}

export default Stack
