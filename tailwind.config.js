const plugin = require('tailwindcss/plugin')
const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
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
        dark: 'rgb(22, 27, 34)',
        light: '#f9f9f9',
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
            a: {
              textDecoration: 'none',
            },
            ol: {
              li: {
                '&:before': {
                  backgroundColor: theme('colors.gray.700'),
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
            'strong,thead': {
              color: theme('colors.gray.900'),
            },
            thead: {
              color: theme('colors.gray.900'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.300'),
              fontWeight: 'normal',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
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
            'strong,thead': {
              color: theme('colors.gray.50'),
            },
            blockquote: {
              color: theme('colors.gray.50'),
              borderLeftColor: theme('colors.gray.700'),
              fontWeight: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        h1: {
          fontWeight: '800',
          letterSpacing: '-0.025em',
        },
        'h2,h3,h4,h5,h6': {
          fontWeight: '700',
          letterSpacing: '-0.025em',
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
