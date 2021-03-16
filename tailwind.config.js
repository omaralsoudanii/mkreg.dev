/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    keyframes: true,
    colors: true,
    fontFamily: true,
  },
  darkMode: 'class', // 'media' or 'class'
  fontFamily: {
    mono: [...fontFamily.mono],
    sans: [...fontFamily.sans],
  },
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
    },
    extend: {
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
          },
        },
        lg: {
          fontFamily: {
            sans: ['"font-inter"'],
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.blue.500'),
              textDecoration: 'none',
            },
          },
        },
      }),
      colors: {
        gray: colors.trueGray,
        'gray-1000': '#050505',
        'gray-950': '#161b22',
        transparent: 'transparent',
        current: 'currentColor',
        black: '#000000',
        white: '#ffffff',
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
    require('tailwindcss-line-clamp'),
    require('tailwindcss-font-inter')({
      importFontFace: false,
    }),
  ],
}
