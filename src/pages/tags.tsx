import ProseLayout from '@/components/Layouts/ProseLayout'
import Seo from '@/components/Seo'
import Tag from '@/components/Tag'
import { getAllTags } from '@/lib/mdx'
import { GetStaticProps } from 'next'
import Link from 'next/link'

/**
 * Main Tags page
 *
 * Loads all tags
 *
 */

export default function Tags({ tagCount, tags, charSlice }) {
  const meta = {
    title: `Omar Alsoudani - Tags`,
    description: `Browse my writings, discussions and thoughts by tags.`,
    JsonLd: false,
  }

  const sortedTagsChars = Object.keys(charSlice).sort((a, b) =>
    a.localeCompare(b)
  )

  const uniqChars = sortedTagsChars.filter(
    (c, i, arr) => arr.findIndex((t) => t.charAt(0) === c.charAt(0)) === i
  )

  return (
    <ProseLayout>
      <Seo data={meta} />
      <section className="mb-8 space-y-8 lg:mb-16">
        <h1 className="!mb-4">Tags</h1>
        <p>
          Tags sorted alphabetically then by how many times each tag has been
          added to my writing
        </p>
        <p className="text-right">
          <Link href="/writing">
            <a className="mr-1 link-unstyled">Browse all Writings</a>
          </Link>
        </p>
      </section>
      <section className="grid grid-flow-row gap-6">
        {uniqChars.map((tc) => (
          <div key={tc}>
            <header className="w-full border-b border-gray-300 dark:border-gray-700">
              <h3 className="!my-2 !font-bold">
                {charSlice[tc].toUpperCase()}
              </h3>
            </header>

            {Object.keys(tags)
              .filter((t) => t.charAt(0) === tc.charAt(0))
              .sort((a, b) => tagCount[b] - tagCount[a])
              .map((item) => (
                <Tag
                  className="!my-0 text-base !py-0"
                  key={item}
                  name={tags[item]}
                  slug={item}
                  count={tagCount[item]}
                />
              ))}
          </div>
        ))}
      </section>
    </ProseLayout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const data = await getAllTags('writing')

  return {
    props: {
      ...data,
    },
  }
}
