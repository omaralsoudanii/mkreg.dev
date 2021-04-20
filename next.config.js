module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  compress: process.env.NODE_ENV === 'development',
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
  async headers() {
    return [
      {
        source: '/rss.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, no-cache, no-tranform, must-revalidate',
          },
        ],
      },
      {
        source: '/static/fonts/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=31536000, no-transform',
          },
        ],
      },
      {
        source: '/static/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
        ],
      },
      {
        source: '/meta/(.*)',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          },
          {
            key: 'Cache-Control',
            value: 'public, s-maxage=3600, no-transform',
          },
        ],
      },
      {
        source: '/sitemap.xml',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, no-cache, no-tranform, must-revalidate',
          },
        ],
      },
      {
        source: '/robots.txt',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, no-cache, no-tranform, must-revalidate',
          },
        ],
      },
    ]
  },
}
