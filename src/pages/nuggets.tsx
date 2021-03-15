import Page from '@/components/Page'
import { CenteredColumn } from '@/components/Layouts'

function Nuggest() {
  return (
    <Page>
      <CenteredColumn>
        <div className="flex flex-col space-y-12">
          <div className="flex flex-col space-y-8 md:items-justify">
            <div className="flex flex-col space-y-4 md:items-center md:text-center">
              <h1>Nuggest</h1>
              <p className="text-2xl">Resource i recommend everyone to read</p>
            </div>
          </div>
        </div>
      </CenteredColumn>
    </Page>
  )
}

export default Nuggest