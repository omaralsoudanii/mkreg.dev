import { Head, Html, Main, NextScript } from 'next/document'

import { Environment } from '@/lib/environment'

export default function Document() {
  return (
    <Html lang='en'>
      <Head>
        <link
          rel='preload'
          href='/static/fonts/Inter-roman.var-latin.woff2'
          as='font'
          type='font/woff2'
          crossOrigin='anonymous'
        />
        <link
          rel='alternate'
          type='application/rss+xml'
          title='Omar Alsoudani RSS Feed'
          href={`${Environment.siteUrl}${Environment.social.rss}`}
        />
        <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "039c33ad40a645b5806d77ac9634148d"}'></script>
        <link rel='apple-touch-icon' sizes='180x180' href='/meta/apple-touch-icon.png' />
        <link rel='icon' type='image/png' sizes='32x32' href='/meta/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/meta/favicon-16x16.png' />
        <link rel='manifest' href='/meta/site.webmanifest' />
        <link rel='mask-icon' href='/meta/safari-pinned-tab.svg' color='#191818' />
        <meta name='apple-mobile-web-app-title' content='MK' />
        <meta name='application-name' content='MK' />
        <meta name='msapplication-TileColor' content='#2d89ef' />
        <meta name='msapplication-config' content='/meta/browserconfig.xml' />
        <meta name='theme-color' content='#161b22' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
