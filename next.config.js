module.exports = {
  poweredByHeader: false,
  future: {
    webpack5: true,
  },
  compress: process.env.NODE_ENV === 'development',
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
    ]
  },
}
