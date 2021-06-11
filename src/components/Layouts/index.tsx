import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="bg-light dark:bg-dark">
      <Header />
      <main className="flex flex-col px-4 lg:px-0 justify-center bg-light dark:bg-dark">
        {children}
        <Footer />
      </main>
    </div>
  )
}
