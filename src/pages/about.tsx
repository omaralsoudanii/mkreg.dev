import { CenteredColumn } from '@/components/Layouts'
import Page from '@/components/Page'

function About() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-24">
          <div className="flex flex-col space-y-8 md:items-center">
            <div className="flex flex-col space-y-2 md:space-x-4 md:flex-row md:space-y-0 md:items-center md:justify-center">
              <p className="text-xl">
                Huh, you really thought i got more to say? I guess I'll update
                this page with more details.
              </p>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default About
