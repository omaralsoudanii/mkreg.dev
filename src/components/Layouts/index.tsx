import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="w-full max-w-screen-md px-5 pt-24 pb-8 mx-auto mt-6 lg:pt-16 md:max-w-screen-lg lg:px-2"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
