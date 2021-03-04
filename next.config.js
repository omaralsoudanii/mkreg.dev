/* eslint-disable @typescript-eslint/no-var-requires */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBundleAnalyzer({
  poweredByHeader: false,
  compress: false,
  images: {
    deviceSizes: [320, 500, 680, 1040, 2080, 2048, 3120],
    domains: [
      'images.unsplash.com',
      'mkreg.dev',
      'content.mkreg.dev',
      'github.githubassets.com',
      'i.gyazo.com',
      'dropbox.tech',
      'localhost',
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
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
