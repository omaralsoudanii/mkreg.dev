/* eslint-disable @typescript-eslint/no-var-requires */
const withPreact = require('next-plugin-preact')

module.exports = withPreact({
  poweredByHeader: false,
  trailingSlash: false,
  future: {
    webpack5: true,
  },
  compress: process.env.NODE_ENV === 'development',
  webpack: (config, { dev, isServer }) => {
    if (isServer && !dev) {
      require('./scripts/generate-sitemap')
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
  async headers() {
    return [
      {
        source: '/rss',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/xml',
          },
        ],
      },
      {
        source: '/static/fonts/Inter-roman.var.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/static/fonts/Inter-italic.var.woff2',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
})
