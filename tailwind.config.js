const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/data/**/*.{mdx}',
  ],
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
        inter: ['Inter', ...fontFamily.sans],
        'inter-var': ['"Inter var"', ...fontFamily.sans],
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
          700: '#333333',
        },
        // dark: 'rgb(13, 17, 23)',
        dark: 'rgb(22, 27, 34)',
        light: '#f9f9f9',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            lineHeight: '1.5',
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            ol: {
              li: {
                '&:before': { top: '0.6em' },
              },
            },
            ul: {
              li: {
                '&:before': { top: '0.6em' },
              },
            },
            'h2,h3': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.semibold'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.medium'),
            },
            a: {
              textDecoration: 'none',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3,h4,h5,h6,strong': {
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
          letterSpacing: '-.025em',
        },
        'h2,h3': {
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-.025em',
        },
        'h4,h5,h6': {
          fontWeight: theme('fontWeight.medium'),
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': '5em',
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': '3em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
