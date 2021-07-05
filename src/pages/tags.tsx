import ProseContainer from '@/components/Layouts/ProseContainer'
import Seo from '@/components/Seo'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'

/**
 * Main Tags page
 *
 * Loads all tags sorted alphabetically then by count
 *
 */

export default function Tags({ sortedData }) {
  const meta = {
    title: `Omar Alsoudani - Tags`,
    description: `Browse my writings, discussions and thoughts by tags.`,
    JsonLd: false,
  }

  return (
    <ProseContainer>
      <Seo data={meta} />
      <section className="mb-8 space-y-8 lg:mb-16">
        <header>
          <h1 className="page-heading !mb-4">Tags</h1>
        </header>
        <p>
          Writing tags sorted alphabetically then by how many times each tag has
          been added to my articles
        </p>
        <p className="text-right">
          <Link href="/writing">
            <a className="mr-1 primary-link">Browse all Writing</a>
          </Link>
        </p>
      </section>
      <section className="grid grid-flow-row gap-6">
        {sortedData.map((item: { character: string; characterTags: any[] }) => (
          <div key={item.character}>
            <header className="w-full border-b border-gray-200 dark:border-gray-700">
              <h2 className="!my-3 !font-bold">{item.character}</h2>
            </header>

            <div className="flex space-x-6 flex-row">
              {item.characterTags.map((tag) => (
                <Tag
                  className="!my-0 text-base !pt-3"
                  key={tag.slug}
                  {...tag}
                />
              ))}
            </div>
          </div>
        ))}
      </section>
    </ProseContainer>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const { tagCount, tags, charSlice } = await getAllTags('writing')

  // dont ask..., it's probably the worst implementation done here
  // but who cares this runs at build time (yeah yeah.. I'll revisit this if i use ISR)
  // see https://mkreg.dev/tags
  const sortedTagsChars = Object.keys(charSlice).sort((a, b) =>
    a.localeCompare(b)
  )

  const sortedData = []
  const uniqChars = sortedTagsChars.filter(
    (c, i, arr) => arr.findIndex((t) => t.charAt(0) === c.charAt(0)) === i
  )

  uniqChars.forEach((tc) => {
    const character = charSlice[tc].toUpperCase()
    const characterTags = Object.keys(tags)
      .filter((t) => t.charAt(0) === tc.charAt(0))
      .sort((a, b) => tagCount[b] - tagCount[a])
      .map((slug) => {
        return {
          slug,
          name: tags[slug],
          count: tagCount[slug],
        }
      })
    sortedData.push({ character, characterTags })
  })

  return {
    props: {
      sortedData,
    },
  }
}
