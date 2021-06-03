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
        'rose-600': '0px 2px 0px #E11D48',
        'rose-400': '0px 2px 0px #FB7185',
      },
      colors: {
        gray: {
          700: '#333',
          900: '#17191c',
          1000: '#050505',
          ...colors.trueGray,
        },
        rose: colors.rose,
        // dark: 'rgb(25, 30, 37)',
        // light: '#F5F7F9',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: '#333',
            h1: {
              color: '#050505',
              fontWeight: theme('fontWeight.bold'),
            },
            'h2,h3': {
              color: '#050505',
              fontWeight: theme('fontWeight.semibold'),
            },
            'h4,h5,h6': {
              color: '#050505',
              fontWeight: theme('fontWeight.medium'),
            },
            a: {
              textDecoration: 'none',
            },
            ol: {
              li: {
                '&:before': {
                  color: '#333',
                },
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.300'),
                },
              },
            },
            strong: {
              color: '#050505',
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: '#333',
              borderBottomColor: theme('colors.gray.300'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: '#333',
              borderLeftColor: theme('colors.gray.300'),
              fontWeight: '400',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
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
                '&:before': { backgroundColor: theme('colors.gray.700') },
              },
            },
            strong: {
              color: theme('colors.gray.100'),
              fontWeight: theme('fontWeight.bold'),
            },
            tbody: {
              tr: {
                borderBottomColor: '#333',
              },
            },
            thead: {
              color: theme('colors.gray.300'),
              borderBottomColor: '#333',
            },
            blockquote: {
              color: theme('colors.gray.300'),
              borderLeftColor: '#333',
              fontWeight: '400',
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
          letterSpacing: '-.03rem',
        },
        'h2,h3': {
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-.03rem',
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
          'scroll-margin-top': '2em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
