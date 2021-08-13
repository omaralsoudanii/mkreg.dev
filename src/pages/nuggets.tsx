import * as React from 'react'

import Card from '@/components/Card'
import Seo from '@/components/Seo'
import Bookmarks from '@/lib/bookmarks'

function Nuggets() {
  const meta = {
    title: 'Omar Alsoudani - Nuggets',
    description: 'Resources and bookmarks for the readers',
    JsonLd: false,
  }
  const Component = React.useMemo(() => Card, [])
  const renderNuggets = Bookmarks.map((bookmark) => (
    <Component key={bookmark.title} {...bookmark} />
  ))
  return (
    <article
      id="skip"
      className="prose dark:prose-dark md:prose-lg w-full max-w-none md:max-w-[75ch] mx-auto"
    >
      <Seo data={meta} />

      <section className="mb-8 md:mb-16">
        <header>
          <h1 className="page-heading !mb-4">Nuggets</h1>
        </header>
        <p>
          Some stuff I bookmark to read later, or a tool I find useful to use.
          These recommendations are based on my opinion. Feel free to peek into
          what might interest you. If you happen to see something misleading or
          plain wrong, please contact me
        </p>
      </section>
      <section>{renderNuggets}</section>
    </article>
  )
}

export default Nuggets
