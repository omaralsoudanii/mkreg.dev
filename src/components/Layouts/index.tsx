import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <main className="px-4 pt-24 pb-16 mx-auto mt-6 max-w-prose sm:px-0">
      <Header />
      {children}
      <Footer />
    </main>
  )
}
