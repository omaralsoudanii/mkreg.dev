import { Environment } from '@/lib/environment'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/static/fonts/Inter-roman.latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/Inter-roman.symbols.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/static/fonts/Inter-italic.latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link rel="manifest" href="/static/meta/manifest.json" />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Omar Alsoudani RSS Feed"
            href={`${Environment.siteUrl}${Environment.social.rss}`}
          />
          <meta name="theme-color" content="ffffff" />
          <link
            rel="apple-touch-icon"
            href="/static/meta/apple-touch-icon.png"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
