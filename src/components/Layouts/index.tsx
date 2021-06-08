import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div>
      <Header />
      <main className="flex flex-col justify-center pt-16 pb-8 mt-12 lg:pt-12 lg:mt-4 bg-light dark:bg-dark">
        {children}
      </main>
      <Footer />
    </div>
  )
}
