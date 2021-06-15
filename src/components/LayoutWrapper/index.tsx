import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import * as React from 'react'

const LayoutWrapper = ({ children }) => {
  const [mounted, setMounted] = React.useState(false)
  // When mounted on client, now we can show the UI
  React.useEffect(() => setMounted(true), [])
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="sm:flex mt-6 mb-24 sm:items-center sm:justify-between sm:mt-5 sm:mb-20">
          <div>
            <a href="#skip" className="skip-content-nav">
              Skip to content
            </a>
          </div>
          {mounted && <Header />}
        </header>

        <main className="mb-16">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
