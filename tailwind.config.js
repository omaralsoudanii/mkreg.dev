const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      5: 5,
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
      sans: ['Inter', ...fontFamily.sans],
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        gray: colors.trueGray,
        'gray-100': 'rgb(243, 244, 246)',
        dark: 'rgb(22, 27, 34)',
        light: 'whitesmoke',
      },
      boxShadow: {
        white: '0px 0px 0px #ffffff',
        whiteHover: '0px 2px 0px #ffffff',
        black: '0px 0px 0px #000000',
        blackHover: '0px 2px 0px #000000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            h1: {
              color: theme('colors.black'),
              fontWeight: '740',
            },
            'h2,h3,h4,h5,h6': {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
            },
            a: {
              textDecoration: 'none',
              color: 'inherit',
            },
            ol: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.700'),
                  top: '0.8em',
                },
              },
            },
            ul: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.700'),
                  top: '0.8em',
                },
              },
            },
            strong: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.900'),
              borderBottomColor: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.300'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        lg: {
          css: {
            lineHeight: '1.8',
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.100'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white'),
            },
            ol: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.300') },
              },
            },
            ul: {
              li: {
                '&:before': { backgroundColor: theme('colors.gray.300') },
              },
            },
            strong: {
              color: theme('colors.gray.100'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.300'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontWeight: '740',
          letterSpacing: '-0.025em',
        },
        'h2,h3,h4,h5,h6': {
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: '-0.015em',
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
