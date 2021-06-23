import { Environment } from '@/lib/environment'
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="preload"
            href="/static/fonts/Inter-latin.var.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="alternate"
            type="application/rss+xml"
            title="Omar Alsoudani RSS Feed"
            href={`${Environment.siteUrl}${Environment.social.rss}`}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/meta/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/meta/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/meta/favicon-16x16.png"
          />
          <link rel="manifest" href="/meta/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/meta/safari-pinned-tab.svg"
            color="#191818"
          />
          <link rel="shortcut icon" href="/meta/favicon.ico" />
          <meta name="apple-mobile-web-app-title" content="MK" />
          <meta name="application-name" content="MK" />
          <meta name="msapplication-TileColor" content="#2d89ef" />
          <meta name="msapplication-config" content="/meta/browserconfig.xml" />
          <meta name="theme-color" content="#161b22" />
        </Head>
        <body className="antialiased text-black bg-[whitesmoke] dark:bg-gray-900 dark:text-white">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
