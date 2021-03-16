/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.red.600'),
              textDecoration: 'none',
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.red.400'),
              textDecoration: 'none',
            },
          },
        },
      }),
      boxShadow: {
        cardHover:
          '0 4px 4.1px rgba(0, 0, 0, 0.012),0 4.9px 5.8px rgba(0, 0, 0, 0.018),0 6.3px 8.4px rgba(0, 0, 0, 0.029),0 8.8px 12.9px rgba(0, 0, 0, 0.05),0 15px 23px rgba(0, 0, 0, 0.11)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
        github: '#161b22',
        gray: colors.trueGray,
        'gray-1000': '#050505',
        'gray-950': '#101111',
        red: colors.red,
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      typography: ['dark'],
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-font-inter')({
      importFontFace: false,
    }),
  ],
}
