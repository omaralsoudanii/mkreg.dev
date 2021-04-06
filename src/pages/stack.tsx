import Page from '@/components/Page'
import { CenteredColumn } from '@/components/CenteredColumn'
import Heading from '@/components/Heading'

function Stack() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col items-start py-4 space-y-4">
          <Heading
            title="Tech Stack"
            subTitle="A list of what i know about tech."
          />
          <div className=" hr-stroke" />
        </div>
        <div className="flex flex-col items-start space-y-4">
          <p className="text-xl">Under construction.</p>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Stack
