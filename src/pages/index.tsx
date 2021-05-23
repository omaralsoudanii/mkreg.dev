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
          <div className="!mb-10 lg:!mb-24">
            <h1 className="!font-semibold !mb-4">Omar Alsoudani</h1>
            <h2 className="sub-heading">Software Engineer</h2>
            <h2 className="sub-heading">Architect</h2>
            <h2 className="sub-heading">Creator</h2>
          </div>

          <div className="flex flex-col lg:!mb-16 !mb-10 items-start justify-start divide-y-2 divide-gray-700 dark:divide-gray-400 lg:justify-center lg:items-center lg:divide-y-0 lg:flex-row lg:space-x-6 lg:mt-16">
            <div className="pt-6 space-x-2 space-y-5 lg:pb-8">
              <h1 className="!px-0 !font-semibold !my-4 lg:!leading-loose lg:!px-6 lg:border-gray-700 lg:dark:border-gray-300  lg:!border-r-2">
                Purpose
              </h1>
            </div>
            <p className="!px-0 lg:!px-2 flex flex-col !py-4 !my-0">
              My digital identity, where I can write notes. Share my knowledge
              with others, my opinion on some topics, and open-source projects I
              create and share them here, maybe with a playground or proof of
              concept.
            </p>
          </div>
          <div className="grid items-start grid-cols-1 text-left lg:gap-1 lg:items-center lg:text-center lg:grid-cols-3 !px-2">
            <Link href="/about">
              <a className="my-4 lg:mx-auto link-unstyled link-lg">
                About me &rarr;
              </a>
            </Link>
            <Link href="/writing">
              <a className="my-4 lg:mx-auto link-unstyled link-lg">
                Writing &rarr;
              </a>
            </Link>
            <Link href="/stack">
              <a className="my-4 lg:mx-auto link-unstyled link-lg">
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
