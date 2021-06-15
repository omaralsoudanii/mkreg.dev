import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
      <Header />
      <main className="flex flex-col justify-center px-6 antialiased text-black bg-white dark:bg-gray-900 dark:text-white">
        {children}
        <Footer />
      </main>
    </div>
  )
}
