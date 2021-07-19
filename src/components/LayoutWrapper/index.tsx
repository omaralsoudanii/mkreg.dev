import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between min-h-screen">
        <header className="sm:flex py-12 mb-6 sm:items-center sm:justify-end">
          <a href="#skip" className="skip-content-nav">
            Skip to content
          </a>
          <Header />
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
