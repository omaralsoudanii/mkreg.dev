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
        <div className="flex flex-col py-8 space-y-12 sm:py-16">
          <div className="flex flex-col items-start space-y-8">
            <div className="flex flex-col space-y-4">
              <Heading title="Introduction" subTitle="What am usually doing." />
            </div>
            <div className=" hr-stroke" />
            <div className="flex flex-col space-y-4">
              <p className="text-p-2">
                I’m Omar Alsoudani, a Software developer, based in Amman,
                Jordan. I've been building stuff on the web for about 7 years or
                so (I stopped counting after a while). Working with companies
                across various countries and industries. Following the DevOps
                methodology, my focus would be on building correct, scalable and
                performant applications, Powered by cloud agnostic
                infrastructure.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pt-4 space-y-12 sm:pt-6">
          <div className="flex flex-col items-start space-y-8">
            <div className="flex flex-col space-y-4">
              <Heading
                title="Discussion"
                subTitle="This is me, pretending to be on a talk show."
              />
            </div>
            <div className=" hr-stroke" />
            <div className="flex flex-col space-y-4">
              <h3 className="text-heading-2">
                What technologies and programming languages you consider your
                self good at?
              </h3>
              <p className="text-p-2">
                To be honest, I have stopped counting what programming languages
                I know and what frameworks I can work with. I am of the mindset
                that coding, programming languages won't matter after a certain
                point.
              </p>
              <p className="text-p-2">
                What I try to do best is to recognize the challenges that arise
                during the life cycle of developing a software, whether it's
                about business, technical debt and you probably know the rest.
              </p>
              <p className="text-p-2">
                Then, based on my knowledge and experience, and other factors
                unique to the problem in hand. I approach the problem in an
                abstract way to get a solution.
              </p>
              <p className="text-p-2">
                In summary the technology you are gonna use is a tool to solve
                the problem. Understanding the problem and identifying the core
                cause is more valuable for me. Unless you are a PHP developer 🤦
                (nah, just kidding).
              </p>
              <p className="text-p-2">
                You can find what I "think" am capable of in the
                <Link href="/stack">
                  <a className="pl-1 text-red-600 no-underline hover:underline dark:text-red-400">
                    {' '}
                    Stack page &rarr;
                  </a>
                </Link>
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-heading-2">Do you enjoy working Frontend?</h3>
              <p className="text-p-2">
                Well, let's just accept the fact that my Frontend skills is
                kinda worse than NVIDIA drivers support for linux. On a serious
                note, I simply don't have the talent for UI/UX, neither the
                experience on how to create eye pleasing applications. However I
                have a lot of knowledge in the Frontend engineering parts.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <h3 className="text-heading-2">
                Then how the hell you created this site?
              </h3>
              <p className="text-p-2">
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
