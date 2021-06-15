const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
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
        'rose-600': '0px 2px 0px #e11d48',
        'rose-400': '0px 2px 0px #FB7185',
      },
      colors: {
        blue: colors.lightBlue,
        code: {
          green: '#b5f4a5',
          yellow: '#ffe484',
          purple: '#d9a9ff',
          red: '#ff8383',
          blue: '#93ddfd',
          white: '#fff',
        },
        rose: colors.rose,
        // dark: 'rgb(22, 27, 34)',
        // 'dark-blue': 'rgb(17,18,19)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: 'none',
            },
            h1: {
              fontWeight: '700',
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: '700',
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
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
            strong: { color: theme('colors.gray.600') },
            blockquote: {
              color: theme('colors.gray.900'),
              borderLeftColor: theme('colors.gray.200'),
              fontWeight: '400',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              textDecoration: 'none',
            },
            h1: {
              fontWeight: '700',
              color: theme('colors.gray.100'),
            },
            h2: {
              fontWeight: '700',
              color: theme('colors.gray.100'),
            },
            h3: {
              fontWeight: '600',
              color: theme('colors.gray.100'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.100'),
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
    plugin(function ({ addBase }) {
      addBase({
        'h1,h2': {
          fontWeight: '700',
        },
        h3: {
          fontWeight: '600',
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
