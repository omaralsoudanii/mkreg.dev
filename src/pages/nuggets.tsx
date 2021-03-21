import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Nuggets() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-8 items-start">
          <div className="flex flex-col space-y-4">
            <h1>Nuggets</h1>
            <p className="text-title">Resources I recommend everyone to read</p>
          </div>
          <div className=" hr-stroke" />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Nuggets
