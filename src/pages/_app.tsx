import SEO from '@/components/Seo'
import React from 'react'
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
      <React.Fragment>
        <SEO />
        <Component {...pageProps} />
      </React.Fragment>
    )
  }
}

export default MyApp
