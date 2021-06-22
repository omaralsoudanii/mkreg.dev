import ProseLayout from '@/components/Layouts/ProseLayout'
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
    <ProseLayout>
      <Seo data={meta} />
      <header>
        <h1 className="lg:!mb-16 lg:mt-8 text-center block !text-4xl !font-black xl:!text-7xl">
          The Sultan of swing
        </h1>
      </header>
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
        <h1 className="text-center block  !text-4xl !font-black xl:!text-7xl">
          Mark Knopfler
        </h1>
        <p>
          If you have ever wondered why the hell I have this weird domain name
          rather than something closer to my name (for SEO blah...), then I can
          tell you that the acronym is based on:
        </p>
        <p className="font-bold text-center">
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
          and Dire Straits. Built using{' '}
          <strong>Hugo static sites generator</strong>, open-sourced and hosted
          on <strong>Vercel</strong>
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
        <p>Meanwhile Enjoy</p>
        <p className="!font-bold !text-center">
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
    </ProseLayout>
  )
}
