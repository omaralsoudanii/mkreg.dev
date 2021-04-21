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
        <header className="mb-4">
          <h1>About me</h1>
        </header>
        <p>
          I’m Omar Alsoudani, a Software developer, based in Amman, Jordan. I've
          been building stuff on the web for about 7 years or so (I stopped
          counting after a while). Working with companies across various
          countries and industries. Following the DevOps methodology. My focus
          would be on building correct, scalable, and performant applications,
          Powered by cloud-agnostic infrastructure.
        </p>
        <h2>A technical point of view</h2>
        <p>
          To be honest, I have stopped counting what programming languages I
          know and what frameworks I can work with. I am of the mindset that
          coding, programming languages won't matter after a certain point.
        </p>
        <p>
          What I try to do best is to recognize the challenges that arise during
          the life cycle of developing software, whether it's about business,
          technical debt and you probably know the rest. Then, based on my
          knowledge and experience, and other factors unique to the problem
          context.
        </p>
        <p>
          I approach the problem in an abstract way to get a solution. In
          summary, the technology you are gonna use is a tool to solve the
          problem. Understanding the problem and identifying the core cause is
          more valuable for me. You can find what I "think" am capable of in the{' '}
          <Link href="/stack">
            <a className="pl-1 text-link"> Stack page </a>
          </Link>
        </p>
        <h2>A word of caution</h2>
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
          have a lot of knowledge in the Frontend engineering parts.
        </p>
        <p>
          It is inspired *cough*Stole*cough* by other open-source projects. You
          can read about it in how I{' '}
          <Link href="/writing/building-this-site">
            <a className="pl-1 text-link"> Built this </a>
          </Link>
        </p>
      </Container>
    </React.Fragment>
  )
}
