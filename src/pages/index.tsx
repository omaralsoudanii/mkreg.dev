import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import Link from 'next/link'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software engineer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <Container>
      <Seo data={meta} />
      <div className="!mb-10 lg:!mb-24">
        <h1 className="!mb-4 !text-3xl lg:!text-4xl !font-semibold">
          Hey, I'm Omar Alsoudani
        </h1>
        <h2 className="sub-heading">Creator</h2>
        <h2 className="sub-heading">Architect</h2>
        <h2 className="sub-heading">Software Engineer</h2>
      </div>
      <div className="flex flex-col items-start justify-start  lg:items-center lg:flex-row lg:space-x-6 lg:my-20">
        <div className="py-2 lg:pt-12 lg:pb-12">
          <h1 className="lg:border-gray-900 !font-semibold title-heading lg:ml-0 !mb-0 px-2 lg:border-r-2 lg:dark:border-gray-100 lg:pr-6 lg:pl-0">
            Goal
          </h1>
        </div>
        <p className="!px-2 !text-primary py-2 !leading-relaxed lg:py-0 !my-0 max-w-lg">
          The purpose of this site to be my digital identity, where I can write
          notes. Share my knowledge with others, my opinion on some topics, and
          open-source projects I create and share them here. Maybe with a
          playground or proof of concept.
        </p>
      </div>

      <p className="text-left !px-2  py-2 lg:py-4 !my-1">
        <Link href="/about">
          <a className="inline w-auto link-unstyled">More about me &rarr;</a>
        </Link>
      </p>
    </Container>
  )
}

export default Home
