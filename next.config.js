/* eslint-disable @typescript-eslint/no-var-requires */
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
    ],
  },
  webpack: (config, { dev, isServer }) => {
    if (isServer && !dev) {
      require('./scripts/generate-sitemap')
    }
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
