import '@/styles/fonts.css'
import '@/styles/main.css'

import type { AppProps } from 'next/app'

import MDXComponents from '@/components/MDXComponents'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import { Main } from '@/components/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <MDXProvider components={MDXComponents}>
        <Main>
          <Component {...pageProps} />
        </Main>
      </MDXProvider>
    </ThemeProvider>
  )
}

export default MyApp
