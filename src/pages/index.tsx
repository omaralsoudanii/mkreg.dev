import ProseLayout from '@/components/Layouts/ProseLayout'
import SectionContainer from '@/components/SectionContainer'
import Seo from '@/components/Seo'
import Link from 'next/link'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software engineer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <SectionContainer>
      <ProseLayout>
        <Seo data={meta} />
        <article className="flex flex-col mb-8 lg:mb-20 space-y-6">
          <h1 className="!mb-1 !font-medium !text-2xl md:!text-3xl lg:!text-4xl">
            Hi, I'm Omar Alsoudani
          </h1>
          <p>
            This site is my digital identity, where I'm writing notes, share my
            knowledge with others, writing about some topics. Open-sourced
            projects I create and share them here. Maybe with a playground or
            proof of concept.
          </p>
          <p className="self-end">
            <Link href="/about">
              <a className="mr-1 text-link">More about me</a>
            </Link>
          </p>
        </article>
      </ProseLayout>
    </SectionContainer>
  )
}

export default Home
