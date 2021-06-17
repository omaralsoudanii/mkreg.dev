module.exports = {
  webpack5: true,
  strictPostcssConfiguration: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  optimizeFonts: false,
  cleanUrls: true,
  trailingSlash: false,
  compress: false,
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
}
