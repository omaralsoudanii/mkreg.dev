import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Nuggets() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 items-center text-center">
              <h1>Nuggets</h1>
              <p className="text-2xl">Resources I recommend everyone to read</p>
            </div>
          </div>
          <div className=" hr-stroke" />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Nuggets
