import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CenteredColumn } from '../CenteredColumn'

export function Main({ children }) {
  return (
    <main className="h-screen max-w-screen-md mx-auto justify-items-center">
      <Header />
      <Page>
        <CenteredColumn>{children}</CenteredColumn>
      </Page>
      <Footer />
    </main>
  )
}
