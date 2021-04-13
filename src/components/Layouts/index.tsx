import Page from '@/components/Page'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="max-w-prose mx-auto">
      <Header />
      <main className="mt-6">
        <Page>{children}</Page>
      </main>
      <Footer />
    </div>
  )
}
