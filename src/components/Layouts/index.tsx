import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main
        id="skip"
        className="max-w-screen-sm px-6 pt-24 pb-8 mx-auto mt-6 md:max-w-screen-md md:px-0"
      >
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
