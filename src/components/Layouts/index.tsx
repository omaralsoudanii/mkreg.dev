import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CenteredColumn } from '../CenteredColumn'

export function Main({ children }) {
  return (
    <div className="max-w-screen-sm mx-auto">
      <Header />
      <main className="mb-auto">
        <Page>
          <CenteredColumn>{children}</CenteredColumn>
        </Page>
      </main>
      <Footer />
    </div>
  )
}
