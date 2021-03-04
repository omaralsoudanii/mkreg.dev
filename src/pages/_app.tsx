import '@/styles/base.css'
import '@/styles/main.css'
import App from 'next/app'
import { ThemeProvider } from 'next-themes'

class MyApp extends App {
  componentDidCatch(error, errorInfo) {
    super.componentDidCatch(error, errorInfo)
  }

  render() {
    const { Component, pageProps } = this.props
    return (
      <ThemeProvider attribute="class">
        <Component {...pageProps} />
      </ThemeProvider>
    )
  }
}

export default MyApp
