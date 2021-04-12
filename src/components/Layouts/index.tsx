import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CenteredColumn } from '../CenteredColumn'

export function Main({ children }) {
  return (
    <div className="h-screen max-w-2xl mx-auto justify-items-center">
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
