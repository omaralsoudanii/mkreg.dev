import * as React from 'react'
import Page from '@/components/Page'
import { CenteredColumn } from '@/components/CenteredColumn'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'

export function Main({ children }) {
  return (
    <main className="h-screen max-w-screen-lg mx-auto justify-items-center md:text-lg">
      <Header />
      <Page>
        <CenteredColumn>{children}</CenteredColumn>
      </Page>
      <Footer />
    </main>
  )
}
