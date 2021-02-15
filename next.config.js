/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  compress: process.env.NODE_ENV !== 'production',
  images: {
    domains: [
      'images.unsplash.com',
      'mkreg.dev',
      'cms.mkreg.dev',
      'static.ghost.org',
      'ghost.org',
      'github.githubassets.com',
      'gatsby.ghost.io',
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
