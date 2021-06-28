const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{ts,tsx,js,mdx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
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
        sans: ['Inter', ...fontFamily.sans],
      },
      boxShadow: {
        white: '0px 2px 0px #fff',
        black: '0px 2px 0px #000',
        'blue-400': '0px 2px 0px #60a5fa',
        'blue-600': '0px 2px 0px #246cff',
      },
      colors: {
        code: {
          green: '#b2eb5c',
          yellow: '#ffe484',
          purple: '#d2a8ff',
          red: '#ff7b72',
          rose: '#FB7185',
          blue: '#79c0ff',
          white: '#ffffff', // no shit?
          gray: '#f9f9f9',
        },
        blue: {
          ...colors.blue,
          600: '#246cff',
        },
        // dark: 'rgb(22, 27, 34)',
        // 'dark-blue': 'rgb(17,18,19)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: null,
              color: null,
              code: { color: theme('colors.blue.600') },
            },
            h1: {
              fontWeight: theme('fontWeight.extrabold'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.900'),
            },
            h3: {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.900'),
            },
            'h4,h5,h6': {
              color: theme('colors.gray.900'),
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.900') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.200'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.300'),
            a: {
              textDecoration: null,
              color: null,
              code: { color: theme('colors.blue.400') },
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
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
    plugin(function ({ addBase, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'normal',
            fontNamedInstance: 'Regular',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Inter-roman.var-latin.woff2") format("woff2")',
          },
        },
        {
          '@font-face': {
            fontFamily: 'Inter',
            fontWeight: '100 900',
            fontStyle: 'italic',
            fontNamedInstance: 'Italic',
            fontDisplay: 'swap',
            src: 'url("/static/fonts/Inter-italic.var-latin.woff2") format("woff2")',
          },
        },
        {
          h1: {
            fontWeight: theme('fontWeight.extrabold'),
            letterSpacing: theme('letterSpacing.tight'),
          },
          h2: {
            fontWeight: theme('fontWeight.semibold'),
            letterSpacing: theme('letterSpacing.tight'),
          },
          h3: {
            fontWeight: theme('fontWeight.semibold'),
          },
        },
      ])
    }),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.scroll-spacing-sm': {
          'scroll-margin-top': '4em',
        },
        '.scroll-spacing-lg': {
          'scroll-margin-top': '1em',
        },
      }

      addUtilities(newUtilities)
    }),
  ],
}
