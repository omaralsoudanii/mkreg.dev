import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import { CenteredColumn } from '@/components/CenteredColumn'

export function Main({ children }) {
  return (
    <main className="w-10/12 h-screen mx-auto md:w-8/12 lg:w-1/2 justify-items-center">
      <Header />
      <Page>
        <CenteredColumn>{children}</CenteredColumn>
      </Page>
      <Footer />
    </main>
  )
}
