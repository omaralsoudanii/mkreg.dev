/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,ts,tsx,md,mdx}'],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontSize: {
      xs: [
        '0.75rem',
        {
          letterSpacing: '0.0004908em',
        },
      ],
      sm: [
        '0.875rem',
        {
          letterSpacing: '-0.0062235em',
        },
      ],
      base: [
        '1rem',
        {
          letterSpacing: '-0.0109598em',
        },
      ],
      lg: [
        '1.125rem',
        {
          letterSpacing: '-0.0143007em',
        },
      ],
      xl: [
        '1.25rem',
        {
          letterSpacing: '-0.0166573em',
        },
      ],
      '2xl': [
        '1.5rem',
        {
          letterSpacing: '-0.0194923em',
        },
      ],
      '3xl': [
        '1.875rem',
        {
          letterSpacing: '-0.0213145em',
        },
      ],
      '4xl': [
        '2.25rem',
        {
          letterSpacing: '-0.0219541em',
        },
      ],
      '5xl': [
        '3rem',
        {
          letterSpacing: '-0.0222574em',
        },
      ],
      '6xl': [
        '4rem',
        {
          letterSpacing: '-0.0222974em',
        },
      ],
    },
    extend: {
      fontWeight: {
        normal: 440,
      },
      fontFamily: {
        sans: ['Inter var', ...fontFamily.sans],
        mono: [...fontFamily.mono],
        system: [...fontFamily.sans],
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            a: {
              color: theme('colors.blue.600'),
              textDecoration: 'none',
            },
            'code:before': {
              content: 'none',
            },
            'code:after': {
              content: 'none',
            },
          },
        },
        dark: {
          css: {
            a: {
              color: theme('colors.blue.400'),
              textDecoration: 'none',
            },
          },
        },
      }),
      colors: {
        black: '#000000',
        white: '#ffffff',
        semiblack: '#0b0b0c',
        gray: colors.trueGray,
        'gray-1000': '#050505',
        'gray-950': '#111111',
        blue: colors.lightBlue,
      },
    },
  },
  variants: {
    extend: {
      fontWeight: ['dark'],
      textColor: ['dark'],
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
