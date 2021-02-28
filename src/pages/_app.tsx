import '@/styles/tailwind.css'
import '@/styles/custom-styles.css'
import '@/styles/fonts.css'
import 'tailwindcss/utilities.css'
import App from 'next/app'
import SeoConfig from '@/default.seo'
import { ThemeProvider } from 'next-themes'
import { DefaultSeo } from 'next-seo'

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider attribute="class">
        <DefaultSeo {...SeoConfig} />
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
