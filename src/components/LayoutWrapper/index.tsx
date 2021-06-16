import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex flex-col justify-between h-screen">
        <header className="sm:flex  py-12 mb-6 sm:items-center sm:justify-between">
          <div>
            <a href="#skip" className="skip-content-nav">
              Skip to content
            </a>
          </div>
          <Header />
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
