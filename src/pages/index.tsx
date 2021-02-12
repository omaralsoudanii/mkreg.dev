import Link from 'next/link'
import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Home() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-8 md:items-justify md:text-justify">
              <h1>Hello, I’m Omar</h1>
              <p className="text-2xl">
                A programmer who made this site out of bordem, I'll be writing
                about software engineering in general, excluding the Frontend
                ofcourse 🤔
              </p>
              <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
                <Link href="/blog" passHref>
                  <a>
                    <button className="w-full text-lg btn btn-primary btn-large">
                      Read
                    </button>
                  </a>
                </Link>
                <a
                  href="https://github.com/omaralsoudanii"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="w-full text-lg btn btn-large">
                    Github
                  </button>
                </a>
              </div>
              <hr className="border-gray-300 " />
            </div>
            <div className="flex flex-col space-y-8 md:items-justify">
              <h2> Why not Frontend?</h2>
              <p className="text-xl">
                Well, let's just accept the fact that my frontend skills is
                kinda worse than NVIDIA drivers support for linux
              </p>
              <hr className="border-gray-300 " />
            </div>
            <div className="flex flex-col space-y-8 md:items-justify">
              <h2> What else? </h2>
              <p className="text-xl">
                When i have the time (AKA figuring out this Tailwind stuff), I
                wanna make dedicated sections for:
              </p>
              <ul className="list-disc space-y-2">
                <li className="mx-8">
                  Code snippets: sharing some random stuff that saved me so much
                  time, probably Backend/Infra stuff.
                </li>
                <li className="mx-8">
                  Projects: open source side projects I made for fun. You can
                  treat them as boilerplate code, pick whatever you want and
                  integrate it in your code.
                </li>
                <li className="mx-8">
                  If you have a suggestion, contact me! (unless it's CSS
                  related....)
                </li>
              </ul>
              <hr className="border-gray-300 " />
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Home
