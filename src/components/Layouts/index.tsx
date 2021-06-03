import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import * as React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <main className="flex flex-col items-start justify-center w-full max-w-2xl pt-8 pb-8 mx-auto  mb-16 px-6 lg:pt-12 lg:max-w-3xl lg:px-2">
        {children}
        <Footer />
      </main>
    </React.Fragment>
  )
}
