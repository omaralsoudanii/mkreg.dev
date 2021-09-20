import Footer from '@/components/Footer'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <a href='#skip' className='skip-content-nav'>
        Skip to content
      </a>
      <div className='flex flex-col justify-between min-h-screen'>
        <header className='md:flex py-12 mb-4 md:items-center md:justify-end'>
          <Header />
        </header>
        <main className='mb-auto'>{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
