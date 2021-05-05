import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="max-w-2xl px-6 pt-24 pb-8 mx-auto mt-6 md:max-w-3xl md:px-0"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
