import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'

export default function About() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-8">
          <div className="flex flex-col space-y-8 md:items-center">
            <div className="flex flex-col space-y-4 md:text-start">
              <h1>About me</h1>
              <p className="text-xl">
                I’m Omar Alsoudani, a Software developer, based in Amman,
                Jordan. I've been building stuff on the web for about 7 years or
                so (I stopped counting after a while). Working with companies
                across various countries and industries. My focus is on creating
                correct, scalable & performant applications. Powered by cloud
                agnostic infrastructure using the proper tools with DevOps
                mindset.
              </p>
            </div>
          </div>
          <div className="flex flex-col space-y-8 md:items-center">
            <div className="flex flex-col space-y-4 md:text-start">
              <h2> Why I won't wirte that much about Frontend</h2>
              <p className="text-xl">
                Well, let's just accept the fact that my frontend skills is
                kinda worse than NVIDIA drivers support for linux. On a serious
                note, I simply don't have the talent for UI/UX, neither the
                experience on how to create eye pleasing applications. However i
                have a lot of knowledge in the Frontend engineering parts.
              </p>
            </div>
          </div>

          <div className="flex flex-col space-y-8 md:items-center">
            <div className="flex flex-col space-y-4 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:text-center">
              <a
                href="https://github.com/omaralsoudanii"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-large"
              >
                Follow me on Github
              </a>
              <a
                href="https://www.linkedin.com/in/omaralsoudani"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-large"
              >
                Reach me via LinkedIn
              </a>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}
