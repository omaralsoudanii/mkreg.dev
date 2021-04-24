import { Container } from '@/components/Container'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'
import * as React from 'react'

export default function MK() {
  const meta = {
    title: 'Omar Alsoudani - The Sultan of swing',
    description: 'The legend himself.',
    JsonLd: false,
  }

  return (
    <React.Fragment>
      <Seo data={meta} />
      <Container>
        <h1 className="text-center">The Sultan of swing</h1>
        <NextImage
          src="/static/images/mk.jpg"
          alt="Mark Knopfler"
          width={3000}
          height={2400}
        />
        <p>
          Well, Congrats on finding this page! Let me introduce you to my
          favorite human being in the universe. The legend himself Mr.Mark
          Knopfler.
        </p>
        <p>
          If you have ever wondered why the hell I have this weird domain name
          rather than something closer to my name (for SEO blah...), Then I can
          tell you that it's based on this acronym:
        </p>
        <p className="mx-auto text-center">
          <a
            className="text-link"
            href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Knopfler Red Electric Guitar
          </a>
        </p>
        <p>
          Everyone has his own "Red Electric Guitar". Seeing this beautiful
          genuine soul getting his guitar is always a pleasure that puts a smile
          on my face.
        </p>
        <p>
          So there you go, now you have the answer to the ultimate question of
          life.
        </p>
        <p>
          You can check my YouTube playlist for some goodies in the footer
          below.
        </p>
        <p>
          Perhaps you can check this too 🤔{' '}
          <a
            href="https://mr.mkreg.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto text-center text-link"
          >
            MK
          </a>
        </p>
      </Container>
    </React.Fragment>
  )
}
