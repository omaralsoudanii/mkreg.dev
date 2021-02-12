import SEO from '@/components/Seo'
import { ThemeProvider } from 'next-themes'
import App from 'next/app'
import '@/styles/tailwind.css'
import 'tailwindcss/utilities.css'
import '@/styles/custom-styles.css'

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props

    return (
      <ThemeProvider attribute="class">
        <SEO />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
