import { Environment } from '@/lib/environment'
import Document, { Head, Html, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
          <link rel="manifest" href="/static/meta/manifest.json" />
        </Head>
        <body className="font-inter font-feature-default">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
