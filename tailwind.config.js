const plugin = require('tailwindcss/plugin')
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
        light: 'whitesmoke',
      },
      boxShadow: {
        white: '0px 2px 0px #ffffff',
        black: '0px 2px 0px #000000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            h1: {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.extrabold'),
            },
            'h2,h3': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
              'scroll-margin-top': spacing[32],
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            a: {
              textDecoration: 'none',
              color: 'inherit',
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
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.700'),
              borderBottomColor: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
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
              color: theme('colors.gray.50'),
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
              color: theme('colors.gray.50'),
              fontWeight: theme('fontWeight.bold'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            thead: {
              color: theme('colors.gray.300'),
              borderBottomColor: theme('colors.gray.300'),
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
  variants: {
    typography: ['dark'],
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          fontWeight: theme('fontWeight.extrabold'),
        },
        'h2,h3': {
          fontWeight: theme('fontWeight.bold'),
          'scroll-margin-top': spacing[32],
        },
        'h4,h5,h6': {
          fontWeight: theme('fontWeight.bold'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
