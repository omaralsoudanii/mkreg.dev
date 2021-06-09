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
      },
      boxShadow: {
        white: '0px 2px 0px #fff',
        black: '0px 2px 0px #000',
        'rose-500': '0px 2px 0px #F43059',
        'rose-400': '0px 2px 0px #FB7185',
      },
      colors: {
        rose: colors.rose,
        'rose-500': '#F43059',
        gray: {
          ...colors.coolGray,
          700: '#333',
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
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
            },
            h3: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
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
        lg: {
          css: {
            lineHeight: '1.77',
            'ul > li::before': {
              top: '0.5em',
            },
            'ol > li::before': {
              top: '0.5em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2': {
              color: theme('colors.white'),
            },
            'h3,strong': {
              color: theme('colors.gray.100'),
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
            thead: {
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
          fontWeight: theme('fontWeight.bold'),
          lineHeight: '1.25',
          fontSize: '2.25em',
        },
        h2: {
          fontWeight: theme('fontWeight.semibold'),
          lineHeight: '1.25',
        },
        h3: {
          fontWeight: theme('fontWeight.medium'),
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': '3.5em',
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': '2em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
