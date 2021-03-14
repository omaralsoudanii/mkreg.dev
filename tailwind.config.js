/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.js'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
          },
        },
      }),
      colors: {
        gray: colors.trueGray,
        'gray-1000': '#050505',
        'gray-950': '#161b22',
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      typography: ['dark'],
    },
  },
  plugins: [
    require('tailwindcss-font-inter')({
      importFontFace: false,
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
