import Image from '@/components/ImageComposed'
import Heading from '@/components/Heading'
import Seo from '@/components/Seo'

export default function MK() {
  const meta = {
    title: 'MK',
    description: 'Mark Knopfler OBE',
  }

  return (
    <article>
      <Seo data={meta} />
      <div className="flex flex-col space-y-8">
        <div className="flex flex-col items-center space-y-8 text-center">
          <Heading title="The Sultan of swing" subTitle="Mark Knopfler" />
          <Image
            src="/static/images/mk.jpg"
            alt="Mark Knopfler"
            width={3000}
            height={2400}
          />
          <div className=" hr-stroke" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <p className="text-lg">
            Well, Congrats on finding this page! Let me introduce you to my
            favorite human being in the universe. The legend himself Mr.Mark
            Knopfler.
          </p>
          <p className="text-lg">
            If you have ever wondered why the hell I have this weird domain name
            rather than something closer to my name (for SEO blah...), Then I
            can tell you that it's based on this acronym:
          </p>
          <a
            href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto text-lg text-center text-link"
          >
            Mark Knopfler Red Electric Guitar &rarr;
          </a>
          <p className="text-lg">
            Everyone has his own "Red Electric Guitar". Seeing this beautiful
            genuine soul getting his guitar is always a pleasure that puts a
            smile on my face.
          </p>
          <p className="text-lg">
            So there you go, now you have the answer to the ultimate question of
            life.
          </p>
          <p className="text-lg">
            You can check my YouTube playlist for some goodies in the footer
            below.
          </p>
          <p className="text-lg">
            Perhaps you can check this too 🤔 &rarr;{' '}
            <a
              href="https://mr.mkreg.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto text-lg text-center text-link"
            >
              MK
            </a>
          </p>
        </div>
      </div>
    </article>
  )
}
