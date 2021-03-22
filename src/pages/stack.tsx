import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'
import Heading from '@/components/Heading'

function Stack() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col items-start space-y-8">
          <div className="flex flex-col space-y-4">
            <Heading
              title="Tech Stack"
              subTitle="A list of what i know about tech."
            />
          </div>
          <div className=" hr-stroke" />
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Stack
