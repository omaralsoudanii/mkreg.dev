/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: ['./src/**/*.tsx', './src/**/*.ts'],
  darkMode: 'media', // 'media' or 'class'
  theme: {
    colors: {
      yellow: colors.yellow,
      purple: colors.purple,
      blue: colors.blue,
      gray: colors.gray,
      red: colors.red,
      green: colors.green,
      pink: colors.pink,
      indigo: colors.indigo,
      white: '#fff',
    },
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            blockQuote: {
              fontWeight: '400',
            },
            img: {
              borderRadius: '8px',
            },
            h4: {
              fontSize: '1.5rem',
              fontWeight: '800',
            },
            h5: {
              fontSize: '1.3rem',
              marginTop: '2.5rem',
              marginBottom: '-0.75rem',
            },
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
            code: { color: theme('colors.blue.500') },
          },
        },
      }),
      boxShadow: {
        cardHover:
          '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
      },
      colors: {
        'gray-1000': '#050505',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
