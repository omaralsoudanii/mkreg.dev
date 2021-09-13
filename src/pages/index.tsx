import Link from 'next/link'

import Seo from '@/components/Seo'

const Home = () => {
  const meta = {
    title: 'Omar Alsoudani',
    description: 'Software engineer, creator and the king of laziness.',
    JsonLd: false,
  }
  return (
    <article
      id="skip"
      className="prose dark:prose-dark lg:prose-lg w-full max-w-none lg:max-w-[75ch] mx-auto"
    >
      <Seo data={meta} />
      <header>
        <h1 className="page-heading !mb-2">Hi, I'm Omar Alsoudani</h1>
      </header>
      <div>
        <p>
          This is my personal site. Where I'm writing notes, writing about some
          topics, and open-source projects I create and share them here. Some
          sections could serve as a playground for me to experiment with some
          ideas, proof of concepts, or anything comes to mind.
        </p>
        <p className="!py-2">
          I'm aiming to keep it simple. It's still a work in progress! however
          I'll try to balance between adding content and enhancing the site
          itself. If you have a project in mind that aligns with my skills and
          would like a chat. You can reach me via any of the links provided in
          the footer, I'm also available for open-source projects!
        </p>
        <p className="self-start py-1">
          <Link href="/about">
            <a className="mr-1 primary-link">Learn more about me</a>
          </Link>
        </p>
        <p className="self-start py-1">
          <Link href="/writing">
            <a className="mr-1 primary-link">Browse my Writing</a>
          </Link>
        </p>
      </div>
    </article>
  )
}

export default Home
