import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import Link from 'next/link'
import * as React from 'react'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software developer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section>
          <div className="!mb-10 md:!mb-24">
            <h1 className="!font-semibold !mb-4">Omar Alsoudani</h1>
            <h2 className="sub-heading">Software Engineer</h2>
            <h2 className="sub-heading">Architect</h2>
            <h2 className="sub-heading">Creator</h2>
          </div>

          <div className="flex flex-col md:!mb-16 !mb-10 items-start justify-start divide-y-2 divide-gray-700 dark:divide-gray-400 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-16">
            <div className="pt-6 space-x-2 space-y-5 md:pb-8">
              <h1 className="!px-2 !font-semibold !mb-4 !mt-4 md:!mb-4 md:!mt-4 md:!leading-[10rem] md:!px-6 md:border-gray-700 md:dark:border-gray-300  md:!border-r-2">
                Purpose
              </h1>
            </div>
            <p className="!px-2 flex flex-col !py-2 !my-0">
              My digital identity, where I can write notes. Share my knowledge
              with others, my opinion on some topics, and open-source projects I
              create and share them here, maybe with a playground or proof of
              concept.
            </p>
          </div>
          <div className="grid items-start grid-cols-1 text-left md:gap-1 md:items-center md:text-center md:grid-cols-3 !px-2">
            <Link href="/about">
              <a className="my-2 md:mx-auto link-unstyled link-lg">
                About me &rarr;
              </a>
            </Link>
            <Link href="/writing">
              <a className="my-2 md:mx-auto link-unstyled link-lg">
                Writing &rarr;
              </a>
            </Link>
            <Link href="/stack">
              <a className="my-2 md:mx-auto link-unstyled link-lg">
                My Stack &rarr;
              </a>
            </Link>
          </div>
        </section>
      </Container>
    </React.Fragment>
  )
}

export default Home
