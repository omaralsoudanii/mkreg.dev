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
            <h1 className="!mb-2">Omar Alsoudani</h1>
            <h2 className="sub-heading">Software Engineer</h2>
            <h2 className="sub-heading">Enthusiast</h2>
            <h2 className="sub-heading">Creator</h2>
          </div>

          <div className="flex flex-col md:!mb-24 !mb-10 items-start justify-start divide-y-4 divide-gray-700 dark:divide-gray-400 md:justify-center md:items-center md:divide-y-0 md:flex-row md:space-x-6 md:mt-16">
            <div className="pt-6 space-x-2 space-y-5 md:pb-8">
              <h1 className="!px-2 !mb-4 !mt-4 md:!mb-2 md:!mt-2 text-4xl md:!text-6xl md:!leading-loose md:!px-6 md:border-gray-700 md:dark:border-gray-400  md:!border-r-2">
                Goal
              </h1>
            </div>
            <div className="flex flex-col !px-2">
              <p className="text-lg md:!text-xl">
                This site will be my digital identity, where I can write notes.
                Share my knowledge with others, my opinion on some topics, and
                open-source projects I create and share them here, maybe with a
                playground or proof of concept.
              </p>
            </div>
          </div>
          <div className="grid items-start grid-cols-1 text-left md:gap-1 md:items-center md:text-center md:grid-cols-3 !px-2">
            <p className="text-lg md:!text-xl md:!font-medium">
              <Link href="/about">
                <a className="my-2 link-unstyled"> About me &rarr; </a>
              </Link>
            </p>
            <p className="text-lg md:!text-xl md:!font-medium">
              <Link href="/writing">
                <a className="my-2 link-unstyled"> Writing &rarr; </a>
              </Link>
            </p>
            <p className="text-lg md:!text-xl md:!font-medium">
              <Link href="/nuggets">
                <a className="my-2 link-unstyled"> Nuggets factory &rarr; </a>
              </Link>
            </p>
          </div>
        </section>
      </Container>
    </React.Fragment>
  )
}

export default Home
