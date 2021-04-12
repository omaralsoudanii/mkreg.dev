import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="max-w-screen-sm mx-auto">
      <Header />
      <main className="max-w-screen-sm mx-auto mt-6 mb-auto">
        <Page>{children}</Page>
      </main>
      <Footer />
    </div>
  )
}
