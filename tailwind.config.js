const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      5: 5,
    },
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
          'Menlo',
          'DejaVu Sans Mono',
          'Bitstream Vera Sans Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace',
        ],
        sans: [
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Inter',
          'Arial',
          '"Noto Sans"',
          '"Ubuntu"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Oxygen"',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ],
      },
      boxShadow: {
        white: '0px 2px 0px #fff',
        black: '0px 2px 0px #000',
        'rose-600': '0px 2px 0px #e11d48',
        'rose-400': '0px 2px 0px #FB7185',
      },
      colors: {
        rose: colors.rose,
        gray: {
          700: '#333333',
        },
        // dark: 'rgb(13, 17, 23)',
        dark: 'rgb(22, 27, 34)',
        light: '#fff',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.extrabold'),
            },
            'h2,h3': {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
            },
            lineHeight: '1.6',
            'ul > li::before': {
              top: '0.6em',
            },
            'ol > li::before': {
              top: '0.6em',
            },
            a: {
              textDecoration: 'none',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3': {
              color: theme('colors.white'),
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.500') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.500') },
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            'thead,strong': {
              color: theme('colors.gray.300'),
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
    require('tailwindcss-line-clamp'),
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontWeight: theme('fontWeight.extrabold'),
        },
        'h2,h3': {
          fontWeight: theme('fontWeight.semibold'),
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': '5em',
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': '2em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
