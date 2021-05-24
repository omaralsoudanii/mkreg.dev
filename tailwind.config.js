const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')
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
      colors: {
        dark: 'rgb(22, 27, 34)',
        'gray-100': 'rgb(245,245,245)',
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
            color: theme('colors.black'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
            },
            'h2,h3,h4,h5,h6': {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
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
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
            },
            thead: {
              color: theme('colors.black'),
              borderBottomColor: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.800'),
              borderLeftColor: theme('colors.gray.300'),
              fontWeight: theme('fontWeight.normal'),
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
          },
        },
        lg: {
          css: {
            lineHeight: '1.8',
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
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
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.semibold'),
            },
            thead: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.gray.300'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: theme('colors.gray.200'),
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
          fontWeight: theme('fontWeight.bold'),
        },
        'h2,h3,h4,h5,h6': {
          fontWeight: theme('fontWeight.semibold'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
