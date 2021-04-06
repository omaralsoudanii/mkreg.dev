import App from 'next/app'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'


import '@/styles/fonts.css'
import '@/styles/main.css'
import { Main } from '@/components/Layouts/main'
class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
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
}

export default MyApp
