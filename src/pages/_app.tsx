import '@/styles/main.css'
import { Main } from '@/components/Layouts'
import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <Main>
        <Component {...pageProps} />
      </Main>
    </ThemeProvider>
  )
}

export default MyApp
