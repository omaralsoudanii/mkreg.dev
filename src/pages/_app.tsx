import '@/styles/fonts.css'
import '@/styles/main.css'

import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { Main } from '@/components/Layouts'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
