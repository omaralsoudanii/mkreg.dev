import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div>
      <a
        href="#content-skip"
        className="sr-only focus:not-sr-only text-rose-400 dark:text-rose-500"
      >
        Skip to content
      </a>
      <Header />
      <main className="flex flex-col justify-center pt-16 pb-8 mt-12 lg:pt-12 lg:mt-4 bg-light dark:bg-dark">
        {children}
      </main>
      <Footer />
    </div>
  )
}
