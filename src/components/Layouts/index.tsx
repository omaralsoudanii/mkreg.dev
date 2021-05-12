import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main id="skip" className="pt-24 pb-8 mt-6 app">
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
