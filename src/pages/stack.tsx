import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Stack() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col space-y-4">
            <h1>Tech Stack</h1>
            <p className="text-title">A list of what i know about tech.</p>
          </div>
          <div className=" hr-stroke" />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Stack
