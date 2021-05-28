import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="w-full max-w-2xl px-6 pt-20 pb-8 mx-auto mt-6 lg:pt-12 md:max-w-3xl lg:px-2"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
