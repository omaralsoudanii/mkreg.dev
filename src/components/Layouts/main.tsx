import { CenteredColumn } from '@/components/CenteredColumn'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <div className="h-screen">
      <Header />
      <CenteredColumn>
        {children}
        <Footer />
      </CenteredColumn>
    </div>
  )
}
