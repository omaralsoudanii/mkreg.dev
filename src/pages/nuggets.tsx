import Bookmarks from '@/lib/bookmarks'
import Seo from '@/components/Seo'
import Card from '@/components/Card'
import ProseLayout from '@/components/Layouts/ProseLayout'
import SectionContainer from '@/components/SectionContainer'

function Nuggets() {
  const meta = {
    title: 'Omar Alsoudani - Nuggets',
    description: 'Resources and bookmarks for the readers',
    JsonLd: false,
  }

  return (
    <SectionContainer>
      <Seo data={meta} />
      <ProseLayout>
        <section className="mb-8 space-y-8 lg:mb-16">
          <h1 className="!mb-4">Nuggets</h1>
          <p>
            Some stuff I bookmark to read later, or a tool I find useful to use.
            These recommendations are based on my opinion, doesn't mean they are
            necessary or must-read. Some of them are debatable, not facts. Feel
            free to peek into what might interest you, If you happen to see
            something misleading or plain wrong. Please contact me!
          </p>
        </section>
        <section>
          {Bookmarks.map((bookmark) => (
            <Card key={bookmark.title} {...bookmark} />
          ))}
        </section>
      </ProseLayout>
    </SectionContainer>
  )
}

export default Nuggets
