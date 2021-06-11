import { Container } from '@/components/Container'
import NextImage from '@/components/NextImage'
import Seo from '@/components/Seo'
import { Environment } from '@/lib/environment'

export default function MK() {
  const meta = {
    title: 'Omar Alsoudani - The Sultan of swing',
    description: 'The legend himself.',
    JsonLd: false,
  }

  return (
    <Container>
      <Seo data={meta} />
      <NextImage
        src="/static/images/mk.jpg"
        alt="Mark Knopfler"
        width={1280}
        height={915}
      />
      <h1 className="text-center title-heading">The Sultan of swing</h1>
      <p>
        Well, Congrats on finding this page! Let me introduce you to my favorite
        human being in the universe. <strong>The legend himself:</strong>{' '}
      </p>
      <h2 className="!my-8 text-center">Mr.Mark Knopfler</h2>
      <p>
        If you have ever wondered why the hell I have this weird domain name
        rather than something closer to my name (for SEO blah...), then I can
        tell you that the acronym is based on this:
      </p>

      <p className="font-semibold">
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
        If you got the gist of the video then I think we can agree that everyone
        has his own <strong>"Red Electric Guitar"</strong> in one way or
        another.
      </p>

      <p>
        Seeing this beautiful genuine soul getting his guitar is always a
        pleasure that puts a smile on my face.
      </p>
      <p>
        So there you go, now you have the answer to the ultimate question of
        life.
      </p>

      <p>
        Below is a small open-sourced <strong>Hugo</strong> app I built and
        hosted on <strong>Vercel</strong> about the Sultan.
      </p>

      <p className="font-semibold">
        <a
          href="https://mkreg-hugo.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          Check mkreg-hugo @ Vercel
        </a>
      </p>

      <p>
        If you happen to have some good <strong>Nuggets</strong> about the
        Sultan, then EMAIL ME ASAP!! Meanwhile Enjoy
      </p>
      <p className="font-semibold">
        <a
          href={Environment.social.youtube}
          target="_blank"
          rel="noopener noreferrer"
          className="text-link"
        >
          The Golden Nugget 👏
        </a>
      </p>
    </Container>
  )
}
