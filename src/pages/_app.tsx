import '@/styles/fonts.css'
import '@/styles/main.css'
import { Main } from '@/components/Layouts'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
