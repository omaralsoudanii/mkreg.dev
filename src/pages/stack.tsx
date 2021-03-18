import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Stack() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-8 md:items-start">
          <div className="flex flex-col space-y-4 items-start text-start">
            <h1>Tech Stack</h1>
            <p className="text-2xl">A list of what i know about tech.</p>
          </div>
        </div>
        <div className=" hr-stroke" />
      </CenteredColumn>
    </Page>
  )
}

export default Stack
