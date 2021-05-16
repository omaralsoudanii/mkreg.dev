import { Container } from '@/components/Container'
import Seo from '@/components/Seo'
import Link from 'next/link'
import * as React from 'react'

export default function About() {
  const meta = {
    title: 'Omar Alsoudani - About',
    description: 'Software developer, creator and the king of laziness.',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <h1 className="mb-4">About me</h1>
        <p>
          I’m Omar Alsoudani, a Software developer, based in Amman, Jordan. I've
          been building stuff on the web for about 7 years or so (I stopped
          counting after a while). Working with companies across various
          countries and industries. Following the DevOps methodology. My focus
          would be on building cloud-agnostic, scalable and performant
          applications.
        </p>
        <h2>Technical point of view</h2>
        <p>
          I have stopped counting what programming languages I know or what
          frameworks I can work with. I developed a mindset that the tooling we
          use won't matter after a certain point, what will always matter is the
          fundamentals that powers our current programming ecosystem.
        </p>
        <p>
          What I do best is to recognize the challenges and patterns that arise
          during the life cycle of developing software, whether it's about
          business, technical debt and you probably know the rest.
        </p>
        <p>
          I approach the problem in an abstract way to get a solution. In
          summary, the technology you are gonna use is a tool to solve the
          problem. Understanding the problem and identifying the core cause is
          more valuable for me. You can find what I "think" am capable of in{' '}
          <Link href="/stack">
            <a className="text-link"> Stack </a>
          </Link>
        </p>
        <h2>Word of caution</h2>
        <p>
          I don't know CSS or Flexbox or anything about UI, please keep in mind
          that it only took me a whole week to center a paragraph in a page
          (didn't even work on mobile 🤦). So, let's just accept the fact that
          my Frontend skills are kinda worse than NVIDIA drivers support for
          Linux.
        </p>
        <p>
          On a serious note, I simply don't have the talent for UI/UX, neither
          the experience on how to create eye-pleasing applications. However, I
          have a lot of knowledge when it comes to non UI parts.
        </p>
        <p>
          This site is inspired *cough*Stole*cough* by other open-source
          projects.I wrote about it in{' '}
          <Link href="/writing/building-my-site">
            <a className="text-link"> Building my site </a>
          </Link>
        </p>
      </Container>
    </React.Fragment>
  )
}
