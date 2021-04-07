import Heading from '@/components/Heading'
import Link from 'next/link'
import Seo from '@/components/Seo'

export default function About() {
  const meta = {
    title: 'About',
    description: 'Introduction and FAQ about me',
  }

  return (
    <article>
      <div className="flex flex-col items-start py-4 space-y-2">
        <Seo data={meta} />
        <Heading title="Introduction" />
        <div className="flex flex-col space-y-4">
          <div className=" hr-stroke" />
          <p className="text-lg">
            I’m Omar Alsoudani, a Software developer, based in Amman, Jordan.
            I've been building stuff on the web for about 7 years or so (I
            stopped counting after a while). Working with companies across
            various countries and industries. Following the DevOps methodology.
            My focus would be on building correct, scalable, and performant
            applications, Powered by cloud-agnostic infrastructure.
          </p>
        </div>
      </div>
      <div className="flex flex-col pt-6 space-y-4 sm:pt-8">
        <Heading title="FAQ" />
        <div className="flex flex-col items-start space-y-12">
          <div className=" hr-stroke" />
          <div className="flex flex-col space-y-4">
            <h3 className="font-extrabold text-tertiary">
              What technologies and programming languages you consider yourself
              good at?
            </h3>
            <p className="text-lg">
              To be honest, I have stopped counting what programming languages I
              know and what frameworks I can work with. I am of the mindset that
              coding, programming languages won't matter after a certain point.
            </p>
            <p className="text-lg">
              What I try to do best is to recognize the challenges that arise
              during the life cycle of developing software, whether it's about
              business, technical debt and you probably know the rest. Then,
              based on my knowledge and experience, and other factors unique to
              the problem context.
            </p>
            <p className="text-lg">
              I approach the problem in an abstract way to get a solution. In
              summary, the technology you are gonna use is a tool to solve the
              problem. Understanding the problem and identifying the core cause
              is more valuable for me. Unless you are a PHP developer 🤦 (Nah,
              just kidding). You can find what I "think" am capable of in the{' '}
              <Link href="/stack">
                <a className="pl-1 text-link"> Stack page &rarr;</a>
              </Link>
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-extrabold text-tertiary">
              I heard you are the one the most talented Frontend engineers out
              there, could you expand on that?
            </h3>
            <p className="text-lg">
              Hmmm, I totally agree, it only took me a whole week to center a
              paragraph in a page (didn't even work on mobile 🤦). So, let's
              just accept the fact that my Frontend skills are kinda worse than
              NVIDIA drivers support for Linux.
            </p>
            <p className="text-lg">
              On a serious note, I simply don't have the talent for UI/UX,
              neither the experience on how to create eye-pleasing applications.
              However, I have a lot of knowledge in the Frontend engineering
              parts.
            </p>
          </div>
          <div className="flex flex-col space-y-4">
            <h3 className="font-extrabold text-tertiary">
              Then how the hell you created this site?
            </h3>
            <p className="text-lg">
              It is inspired *cough*Stole*cough* by other open-source projects.
              I will list them below.
            </p>
          </div>
        </div>
      </div>
    </article>
  )
}
