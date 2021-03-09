import { Environment } from '@/environment'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    return await super.getInitialProps(ctx)
  }

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
          <link
            rel="preload"
            href="/fonts/Inter-italic.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/Inter-roman.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body className="bg-white dark:bg-gray-1000">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
