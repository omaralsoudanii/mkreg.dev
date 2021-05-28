const plugin = require('tailwindcss/plugin')
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
      sans: [
        'system-ui',
        'BlinkMacSystemFont',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'Fira Sans',
        'Droid Sans',
        'Helvetica Neue',
        'sans-serif',
      ],
    },
    extend: {
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },
      colors: {
        gray: {
          1000: '#171717',
        },
        dark: 'rgb(25, 30, 37)',
        // dark: 'rgb(22, 27, 34)',
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
              color: '#171717',
              fontWeight: theme('fontWeight.extrabold'),
            },
            'h2,h3,h4,h5,h6': {
              color: '#171717',
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
              color: theme('colors.gray.1000'),
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
        dark: {
          css: {
            color: theme('colors.gray.100'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.50'),
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
              color: theme('colors.gray.50'),
              fontWeight: theme('fontWeight.bold'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            thead: {
              color: theme('colors.gray.100'),
              borderBottomColor: theme('colors.gray.300'),
            },
            blockquote: {
              color: theme('colors.gray.100'),
              borderLeftColor: theme('colors.gray.700'),
              fontWeight: 'normal',
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
          fontWeight: theme('fontWeight.extrabold'),
        },
        'h2,h3,h4,h5,h6': {
          fontWeight: theme('fontWeight.bold'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
