const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.tsx', './src/**/*.ts', './src/**/*.js'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      fontFamily: {
        mono: [
          'JetBrains Mono',
          'IBM Plex Mono',
          'Fira Code',
          ...fontFamily.mono
        ],
        sans: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        white: '0px 2px 0px #fff',
        black: '0px 2px 0px #000',
        'blue-400': '0px 2px 0px #60a5fa',
        'blue-600': '0px 2px 0px #246cff',
      },
      colors: {
        blue: {
          ...colors.blue,
          600: '#246cff',
        },
        dark: {
          primary: 'rgb(22, 27, 34)',// #161b22
          secondary: 'rgb(29, 34, 41)',// #181D24
          tertiary: 'rgb(33, 38, 45)',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: null,
              color: null,
              code: { color: theme('colors.blue.600') },
            },
            'h1,h2': {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.black'),
            },
            'h3,h4': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.900'),
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.700') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.200'),
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              textDecoration: null,
              color: null,
              code: { color: theme('colors.blue.400') },
            },
            'h1,h2': {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.white'),
            },
            'h3,h4': {
              color: theme('colors.gray.100'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.200') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: theme('colors.gray.700'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    plugin(function ({ addBase, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Inter-roman.var-latin.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Inter-italic.var-latin.woff2") format("woff2")',
          },
        },
        {
          'h1,h2': {
            fontWeight: theme('fontWeight.bold'),
            letterSpacing: theme('letterSpacing.tight'),
          },
          'h3,h4': {
            fontWeight: theme('fontWeight.semibold'),
            letterSpacing: theme('letterSpacing.tight'),
          },
        },
      ])
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': '4em',
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': '2em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
