import ProseLayout from '@/components/Layouts/ProseLayout'
import Seo from '@/components/Seo'
import Link from 'next/link'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software engineer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <ProseLayout>
      <Seo data={meta} />
      <article className="mx-auto">
        <header>
          <h1 className="post-title !mb-2">Hi, I'm Omar Alsoudani</h1>
        </header>
        <section className="flex flex-col">
          <p>
            This site is my digital identity, where I'm writing notes, share my
            knowledge with others, writing about some topics. Open-sourced
            projects I create and share them here. Maybe with a playground or
            proof of concept.
          </p>
          <p className="self-end">
            <Link href="/about">
              <a className="mr-1 text-link">About me</a>
            </Link>
          </p>
        </section>
      </article>
    </ProseLayout>
  )
}

export default Home
