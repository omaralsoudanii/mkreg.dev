/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  compress: process.env.NODE_ENV === 'development',
  images: {
    domains: [
      'images.unsplash.com',
      'content.mkreg.dev',
      'mkreg.dev',
      'github.githubassets.com',
      'i.gyazo.com',
      'dropbox.tech',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
        '@': path.resolve('./src'),
      })
    }

    if (dev) {
      config.watchOptions = {
        ignored: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, '.cache'),
        ],
        aggregateTimeout: 200,
        poll: 1000,
      }
    }

    return config
  },
  redirects: () => [
    {
      source: '/rss',
      destination: '/rss.xml',
      permanent: true,
    },
  ],
})
