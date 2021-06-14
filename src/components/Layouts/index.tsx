import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Header />
      <main className="flex flex-col justify-center px-6 lg:px-0">
        {children}
        <Footer />
      </main>
    </div>
  )
}
