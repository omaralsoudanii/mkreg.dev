import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="bg-light dark:bg-dark">
      <Header />
      <main className="flex flex-col justify-center px-6 bg-light dark:bg-dark">
        {children}
        <Footer />
      </main>
    </div>
  )
}
