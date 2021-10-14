module.exports = {
  experimental: {
    esmExternals: true,
    swcLoader: true,
    swcMinify: true,
  },
  compress: process.env.compress === 'true',
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      // Replace React with Preact only in client production build
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: { memo: true },
        },
      ],
    })

    return config
  },
}
