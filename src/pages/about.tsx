import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'
import Link from 'next/link'

export default function About() {
  const extraMeta = {
    title: 'About',
    description: 'Introduction and FAQ about me',
  }

  return (
    <Page extraMeta={extraMeta}>
      <CenteredColumn>
        <div className="flex flex-col py-8 space-y-12 sm:py-16">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col items-start space-y-4 text-start">
              <h1>Introduction</h1>
              <p className="text-2xl">
                A brief introduction about me and my work.
              </p>
            </div>
            <div className=" hr-stroke" />
            <div className="flex flex-col space-y-4 md:text-start">
              <p className="text-xl">
                I’m Omar Alsoudani, a Software developer, based in Amman,
                Jordan. I've been building stuff on the web for about 7 years or
                so (I stopped counting after a while). Working with companies
                across various countries & industries. My focus is on creating
                correct, scalable & performant applications. Powered by cloud
                agnostic infrastructure using the proper tools with DevOps
                mindset.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 space-y-12 sm:pt-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col items-start space-y-4 text-start">
              <h1>FAQ</h1>
              <p className="text-2xl">
                Answering the most frequently asked questions.
              </p>
            </div>
          </div>
          <div className=" hr-stroke" />
          <div className="flex flex-col space-y-8 md:items-start">
            <div className="flex flex-col space-y-4 md:text-start">
              <h2>
                What is your specialization, and what is your technical skills?
              </h2>
              <p className="text-xl">
                To be honest, I have stopped counting what programming languages
                I know and what frameworks I can work with. I am of the mindset
                that coding, programming languages won't matter after a certain
                point.
              </p>
              <p className="text-xl">
                What I try to do best is to recognize the challenges that arise
                during the life cycle of developing a software, whether it's
                about business, technical debt and you probably the rest.
              </p>
              <p className="text-xl">
                Then, based on my knowledge and experience, and other factors
                unique to the problem in hand. I approach the problem in an
                abstract way to get a solution.
              </p>
              <p className="text-xl">
                In summary the technology you are gonna use is a tool to solve
                the problem. Understanding the problem and identifying the core
                cause is more valuable for me, (Unless you are a PHP developer
                ofcourse 🤦).
              </p>
              <p className="text-xl">
                You can find what I "think" am capable of in the
                <Link href="/stack">
                  <a className="text-red-600 dark:text-red-400">
                    {' '}
                    Stack page &rarr;
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col space-y-4 md:text-start">
              <h2> Why you don't wanna write about Frontend topics?</h2>
              <p className="text-xl">
                Well, let's just accept the fact that my frontend skills is
                kinda worse than NVIDIA drivers support for linux. On a serious
                note, I simply don't have the talent for UI/UX, neither the
                experience on how to create eye pleasing applications. However I
                have a lot of knowledge in the Frontend engineering parts.
              </p>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
