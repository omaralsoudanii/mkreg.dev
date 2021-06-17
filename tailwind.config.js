const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '9/16': '56.25%',
      },
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
        sans: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        white: '0px 2px 0px #fff',
        black: '0px 2px 0px #000',
        'rose-400': '0px 2px 0px #fb7185',
        'rose-500': '0px 2px 0px #f43f5e',
      },
      colors: {
        code: {
          green: '#b2eb5c',
          yellow: '#ffe484',
          purple: '#d2a8ff',
          red: '#ff7b72',
          rose: '#FB7185',
          blue: '#79c0ff',
          white: '#fff',
          gray: '#f9f9f9',
        },
        rose: colors.rose,
        dark: 'rgb(22, 27, 34)',
        // 'dark-blue': 'rgb(17,18,19)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: 'none',
              code: { color: theme('colors.rose.500') },
            },
            h1: {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.black'),
            },
            h2: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.black'),
            },
            h3: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.black'),
            },
            'h4,h5,h6': {
              color: theme('colors.black'),
            },
            code: {
              color: theme('colors.pink.500'),
              backgroundColor: theme('colors.gray.100'),
              paddingLeft: '4px',
              paddingRight: '4px',
              paddingTop: '2px',
              paddingBottom: '2px',
              borderRadius: '0.25rem',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.900') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              textDecoration: 'none',
              code: { color: theme('colors.rose.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white'),
            },
            code: {
              backgroundColor: theme('colors.gray.800'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              fontWeight: '600',
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.100') },
            thead: {
              color: theme('colors.gray.100'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            blockquote: {
              color: theme('colors.gray.100'),
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
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        h2: {
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: theme('letterSpacing.tight'),
        },
        h3: {
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
    require('tailwindcss-line-clamp'),
    require('@tailwindcss/typography'),
  ],
}
