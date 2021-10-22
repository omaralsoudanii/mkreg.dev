module.exports = {
  experimental: {
    esmExternals: true,
    swcLoader: true,
    swcMinify: false,
  },
  images: {
    minimumCacheTTL: 604800, // 1 week, we can make it a month to sync with CF, but I wanna try 1 week first
  },
  compress: process.env.compress === 'true',
  webpack: (config, { dev, isServer }) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { memo: true },
        },
      ],
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
}
