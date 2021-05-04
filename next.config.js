module.exports = {
  future: {
    webpack5: true,
    strictPostcssConfiguration: true,
  },
  experimental: {
    turboMode: true,
  },
  compress: process.env.NODE_ENV === 'development',
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

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
