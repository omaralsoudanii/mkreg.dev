/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      mono: [
        'Menlo',
        'Monaco',
        '"Lucida Console"',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        'gray-1000': '#141414',
        'gray-900': '#1a1a1a',
        'gray-800': '#202020',
        'gray-700': '#2a2a2a',
        'gray-600': '#323232',
        'gray-100': '#fafafa',
        blue: colors.lightBlue,
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            letterSpacing: theme('letterSpacing.tight'),
            color: theme('colors.gray.1000'),
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.400'),
              },
            },
            'h1,h2,h3': {
              fontWeight: '800',
              color: theme('colors.gray.1000'),
            },
            'h4,h5,h6': {
              fontWeight: '700',
              color: theme('colors.gray.1000'),
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            letterSpacing: theme('letterSpacing.tight'),
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.blue.300'),
              },
            },
            'h1,h2,h3': {
              fontWeight: '800',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              fontWeight: '700',
              color: theme('colors.gray.100'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      textColor: ['dark'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
