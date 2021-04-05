import Heading from '@/components/Heading'
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
        <div className="flex flex-col items-start py-4 space-y-2">
          <Heading title="Introduction" />
          <div className="flex flex-col space-y-4">
            <div className=" hr-stroke" />
            <p className="text-lg">
              I’m Omar Alsoudani, a Software developer, based in Amman, Jordan.
              I've been building stuff on the web for about 7 years or so (I
              stopped counting after a while). Working with companies across
              various countries and industries. Following the DevOps
              methodology. My focus would be on building correct, scalable and
              performant applications, Powered by cloud agnostic infrastructure.
            </p>
          </div>
        </div>
        <div className="flex flex-col pt-12 space-y-4 sm:pt-16">
          <Heading title="FAQ" />
          <div className="flex flex-col items-start space-y-12">
            <div className="flex flex-col space-y-4">
              <div className=" hr-stroke" />
              <h3 className="font-extrabold text-tertiary">
                What technologies and programming languages you consider your
                self good at?
              </h3>
              <p className="text-lg">
                To be honest, I have stopped counting what programming languages
                I know and what frameworks I can work with. I am of the mindset
                that coding, programming languages won't matter after a certain
                point.
              </p>
              <p className="text-lg">
                What I try to do best is to recognize the challenges that arise
                during the life cycle of developing a software, whether it's
                about business, technical debt and you probably know the rest.
              </p>
              <p className="text-lg">
                Then, based on my knowledge and experience, and other factors
                unique to the problem in hand. I approach the problem in an
                abstract way to get a solution.
              </p>
              <p className="text-lg">
                In summary the technology you are gonna use is a tool to solve
                the problem. Understanding the problem and identifying the core
                cause is more valuable for me. Unless you are a PHP developer 🤦
                (nah, just kidding).
              </p>
              <p className="text-lg">
                You can find what I "think" am capable of in the{' '}
                <Link href="/stack">
                  <a className="pl-1 text-link"> Stack page &rarr;</a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-extrabold text-tertiary">
                Do you enjoy working Frontend?
              </h3>
              <p className="text-lg">
                Well, let's just accept the fact that my Frontend skills is
                kinda worse than NVIDIA drivers support for linux. On a serious
                note, I simply don't have the talent for UI/UX, neither the
                experience on how to create eye pleasing applications. However I
                have a lot of knowledge in the Frontend engineering parts.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="font-extrabold text-tertiary">
                Then how the hell you created this site?
              </h3>
              <p className="text-lg">
                It is inspired *cough*Stole*cough* by other open source
                projects. I will list them below.
              </p>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
