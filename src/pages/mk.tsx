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
    <article
      id="skip"
      className="prose dark:prose-dark md:prose-lg lg:prose-xl w-full max-w-none mx-auto"
    >
      <Seo data={meta} />
      <div className="!space-y-4 lg:!space-y-8">
        <header>
          <h1 className="lg:!mb-16 lg:mt-8 !leading-none text-center block !text-4xl !font-black lg:!text-[6rem]">
            The Sultan of swing
          </h1>
        </header>
        <NextImage
          src="/static/images/sultan.jpg"
          alt="The Sultan of swing"
          width={3000}
          height={2400}
        />
        <h1 className="text-center block !leading-none !text-4xl !font-black lg:!text-[6rem]">
          Mark Knopfler
        </h1>
        <p>
          Congrats on finding this page! Let me introduce you to my favorite
          human being in the universe. If you have ever wondered why the hell I
          have this weird domain name rather than something closer to my name
          (for SEO blah...), then I can tell you that the acronym is based on:
        </p>
        <p className="!font-semibold text-center">
          <a
            className="primary-link !font-semibold"
            href="https://www.youtube.com/watch?v=JZWDmY6_E2A"
            target="_blank"
            rel="noopener noreferrer"
          >
            Mark Knopfler Red Electric Guitar
          </a>
        </p>

        <p>
          If you got the gist of the video then I think we can agree that
          everyone has his own <strong>"Red Electric Guitar"</strong> in one way
          or another.
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
          <strong> Mark Freuder Knopfler OBE (/ˈnɒpflər/ NOP-flər) </strong>
          and <strong>Dire Straits</strong>. Built using{' '}
          <strong>Hugo static sites generator</strong>, open-sourced and hosted
          on <strong>Vercel</strong>
        </p>
        <p className="!font-semibold text-center">
          <a
            href="https://mkreg-hugo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="primary-link !font-semibold"
          >
            Check mkreg-hugo @ Vercel
          </a>
        </p>
        <p>Here, Hold onto this</p>
        <p className="!font-semibold !text-center">
          <a
            href={Environment.social.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-link !font-semibold"
          >
            Golden Nugget 👏
          </a>
        </p>
      </div>
    </article>
  )
}
