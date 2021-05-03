import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import React from 'react'

export function Main({ children }) {
  return (
    <React.Fragment>
      <Header />
      <div className="max-w-2xl px-6 pt-24 pb-8 mx-auto mt-6 md:max-w-3xl md:px-0">
        <main>{children}</main>
        <Footer />
      </div>
    </React.Fragment>
  )
}
