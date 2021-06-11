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
    <article className="flex flex-col items-start justify-center min-h-full">
      <Seo data={meta} />
      <div className="max-w-2xl mx-auto mb-16 text-base text-primary tracking-wide !leading-normal lg:!leading-relaxed lg:max-w-3xl lg:text-lg skip">
        <h1 className="lg:!mb-16 lg:mt-8 tracking-normal block mb-8 mt-4 text-center !text-4xl text-black dark:text-white lg:!text-6xl !font-black !leading-relaxed">
          The Sultan of swing
        </h1>
        <div className="!space-y-4 lg:!space-y-8">
          <NextImage
            src="/static/images/sultan.jpg"
            alt="The Sultan of swing"
            width={3000}
            height={2400}
          />
          <p>
            Congrats on finding this page! Let me introduce you to my favorite
            human being in the universe.{' '}
          </p>
          <h1 className="text-center tracking-normal block !text-4xl text-black dark:text-white lg:!text-6xl !font-black !leading-relaxed">
            Mark Knopfler
          </h1>
          <p>
            If you have ever wondered why the hell I have this weird domain name
            rather than something closer to my name (for SEO blah...), then I
            can tell you that the acronym is based on:
          </p>
          <p className="font-bold text-center">
            <a
              className="font-bold text-center text-link"
              href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mark Knopfler Red Electric Guitar
            </a>
          </p>

          <p>
            If you got the gist of the video then I think we can agree that
            everyone has his own{' '}
            <strong className="font-extrabold">"Red Electric Guitar"</strong> in
            one way or another.
          </p>
          <p>
            Seeing this beautiful genuine soul getting his guitar is always a
            pleasure that puts a smile on my face. So there you go, now you have
            the answer to the ultimate question of life.
          </p>

          <NextImage
            src="/static/images/mk.jpg"
            alt="Mark Knopfler"
            width={1280}
            height={915}
          />

          <p>
            This is a biography about
            <strong className="font-extrabold">
              {' '}
              Mark Freuder Knopfler OBE (/ˈnɒpflər/ NOP-flər){' '}
            </strong>
            and Dire Straits. Built using{' '}
            <strong className="font-extrabold">
              Hugo static sites generator
            </strong>
            , open-sourced and hosted on{' '}
            <strong className="font-extrabold">Vercel</strong>
          </p>
          <p className="font-bold text-center">
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
            If you happen to have some good{' '}
            <strong className="font-extrabold">Nuggets</strong> about the
            Sultan, then EMAIL ME ASAP!! Meanwhile Enjoy
          </p>
          <p className="font-bold text-center">
            <a
              href={Environment.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-link"
            >
              The Golden Nugget 👏
            </a>
          </p>
        </div>
      </div>
    </article>
  )
}
