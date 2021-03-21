import App from 'next/app'
import { ThemeProvider } from 'next-themes'
import { MDXProvider } from '@mdx-js/react'
import MDXComponents from '@/components/MDXComponents'
import Header from '@/components/Header'
import { Footer } from '@/components/Footer'
import '@/styles/base.css'
import 'tailwindcss/utilities.css'
import '@/styles/custom.css'
import '@/styles/prism.css'
import '@/styles/prose.css'
class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider attribute="class">
        <Header />
        <MDXProvider components={MDXComponents}>
          <Component {...pageProps} />
        </MDXProvider>
        <Footer />
      </ThemeProvider>
    )
  }
}

export default MyApp
