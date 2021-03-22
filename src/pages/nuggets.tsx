import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'
import Heading from '@/components/Heading'

function Nuggets() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-8 items-start">
          <div className="flex flex-col space-y-4">
            <Heading
              title="Nuggets"
              subTitle="Resources I recommend everyone to read"
            />
          </div>
          <div className=" hr-stroke" />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Nuggets
