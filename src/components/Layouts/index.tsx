import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="px-6 pt-24 pb-8 mx-auto mt-6 text-base lg:text-lg max-w-prose lg:px-0"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
