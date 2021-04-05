/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.trueGray,
        'gray-1000': '#0b0b0c',
        'gray-900': '#131415',
        'gray-100': '#fafafa',
        indigo: colors.indigo,
      },
      fontWeight: {
        normal: 440,
      },
      fontFamily: {
        sans: ['"Inter var"', ...fontFamily.sans],
      },
      fontSize: {
        xs: [
          '0.75rem',
          {
            letterSpacing: '0.0004908em',
          },
        ],
        sm: [
          '0.875rem',
          {
            letterSpacing: '-0.0062235em',
          },
        ],
        base: [
          '1rem',
          {
            letterSpacing: '-0.0109598em',
          },
        ],
        lg: [
          '1.125rem',
          {
            letterSpacing: '-0.0143007em',
          },
        ],
        xl: [
          '1.25rem',
          {
            letterSpacing: '-0.0166573em',
          },
        ],
        '2xl': [
          '1.5rem',
          {
            letterSpacing: '-0.0194923em',
          },
        ],
        '3xl': [
          '1.875rem',
          {
            letterSpacing: '-0.0213145em',
          },
        ],
        '4xl': [
          '2.25rem',
          {
            letterSpacing: '-0.0219541em',
          },
        ],
        '5xl': [
          '3rem',
          {
            letterSpacing: '-0.0222574em',
          },
        ],
        '6xl': [
          '4rem',
          {
            letterSpacing: '-0.0222974em',
          },
        ],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.indigo.600'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.indigo.500'),
              },
            },
            'h1,h2,h3': {
              fontWeight: '800',
              color: theme('colors.black'),
              letterSpacing: theme('letterSpacing.tight'),
            },
            'h4,h5,h6': {
              fontWeight: '700',
              color: theme('colors.black'),
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
            color: theme('colors.white'),
            a: {
              color: theme('colors.indigo.400'),
              textDecoration: 'none',
              '&:hover': {
                color: theme('colors.indigo.300'),
              },
            },
            'h1,h2,h3': {
              fontWeight: '800',
              color: theme('colors.white'),
              letterSpacing: theme('letterSpacing.tight'),
            },
            'h4,h5,h6': {
              fontWeight: '700',
              color: theme('colors.white'),
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
