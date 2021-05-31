import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="flex flex-col items-start justify-center w-full max-w-2xl lg:max-w-3xl px-6 pt-20 pb-8 mx-auto mt-6 mb-16 lg:pt-12 lg:px-2"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
