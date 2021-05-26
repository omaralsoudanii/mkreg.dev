import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import Link from 'next/link'
import * as React from 'react'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software engineer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <section>
          <div className="!mb-10 lg:!mb-24">
            <h1 className="!my-4 !text-4xl !tracking-tight">
              Hi, I'm Omar Alsoudani
            </h1>
            <h2 className="sub-heading">Software Engineer</h2>
            <h2 className="sub-heading">Architect</h2>
            <h2 className="sub-heading">Creator</h2>
          </div>
        </section>
        <section className="flex flex-col items-start justify-start divide-y divide-gray-900 dark:divide-gray-100 lg:items-center lg:divide-y-0 lg:flex-row lg:space-x-6 lg:my-20">
          <div className="py-4 lg:pt-12 lg:pb-12">
            <h1 className="lg:border-gray-900 title-heading lg:ml-0 !mb-0 px-2 lg:border-r-2 lg:dark:border-gray-100 lg:pr-6 lg:pl-0">
              Goal
            </h1>
          </div>
          <p className="!px-2 py-4 lg:py-0 !my-0 leading-relaxed max-w-md text-lg">
            The purpose of this site to be my digital identity, where I can
            write notes. Share my knowledge with others, my opinion on some
            topics, and open-source projects I create and share them here. Maybe
            with a playground or proof of concept.
          </p>
        </section>

        <section className="grid items-start grid-cols-1 text-left lg:gap-1 lg:items-center lg:text-center lg:grid-cols-4 !px-2">
          <Link href="/about">
            <a className="my-4 text-lg lg:mx-auto link-unstyled">
              About me &rarr;
            </a>
          </Link>
          <Link href="/writing">
            <a className="my-4 text-lg lg:mx-auto link-unstyled">
              Writing &rarr;
            </a>
          </Link>
          <Link href="/stack">
            <a className="my-4 text-lg lg:mx-auto link-unstyled">
              My Stack &rarr;
            </a>
          </Link>

          <Link href="/nuggets">
            <a className="my-4 text-lg lg:mx-auto link-unstyled">
              Nuggets &rarr;
            </a>
          </Link>
        </section>
      </Container>
    </React.Fragment>
  )
}

export default Home
