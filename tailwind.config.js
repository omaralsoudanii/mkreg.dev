const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const { fontFamily, spacing } = require('tailwindcss/defaultTheme')
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
        white: '0px 2px 0px #ffffff',
        black: '0px 2px 0px #000000',
      },
      colors: {
        gray: colors.trueGray,
        // dark: 'rgb(25, 30, 37)',
        dark: 'rgb(22, 27, 34)',
        light: 'whitesmoke',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
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
            ol: {
              li: {
                '&:before': {
                  color: theme('colors.gray.700'),
                },
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.700'),
                },
              },
            },
            strong: {
              color: theme('colors.gray.700'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.700'),
              borderBottomColor: theme('colors.gray.300'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.300'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            a: {
              textDecoration: 'none',
            },
            ol: {
              li: {
                '&:before': { color: theme('colors.gray.300') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.300') },
              },
            },
            strong: {
              color: theme('colors.gray.300'),
              fontWeight: theme('fontWeight.bold'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            thead: {
              color: theme('colors.gray.300'),
              borderBottomColor: theme('colors.gray.700'),
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
          letterSpacing: '-.02em',
        },
        'h4,h5,h6': {
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: '-.02em',
        },
      })
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': spacing[24],
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': spacing[12],
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
