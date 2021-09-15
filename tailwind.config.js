const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
    './src/data/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ['"JetBrains Mono"', '"IBM Plex Mono"', ...fontFamily.mono],
        sans: ['Inter', ...fontFamily.sans],
      },
      lineHeight: {
        11: '2.75rem',
        12: '3rem',
        13: '3.25rem',
        14: '3.5rem',
      },

      colors: {
        'blue-600': '#1a73e8',
        dark: {
          primary: 'rgb(22, 27, 34)', // #161b22
          secondary: 'rgb(29, 34, 41)', // #1d2229-#181D24
          tertiary: 'rgb(40, 45, 52)', // #282d34
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.700'),
            a: {
              textDecoration: null,
              color: null,
            },
            h1: {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.gray.900'),
            },
            h2: {
              fontWeight: theme('fontWeight.bold'),
              color: theme('colors.gray.900'),
            },
            'h3,h4': {
              fontWeight: theme('fontWeight.semibold'),
              color: theme('colors.gray.900'),
            },
            hr: { borderColor: theme('colors.gray.200') },
            'ol li:before': {
              color: theme('colors.gray.500'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.500'),
            },
            strong: { color: theme('colors.gray.700') },
            blockquote: {
              color: theme('colors.gray.700'),
              borderLeftColor: theme('colors.gray.200'),
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': false,
            'blockquote p:last-of-type::after': false,
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
            color: theme('colors.gray.300'),
            a: {
              textDecoration: null,
              color: null,
            },
            'h1,h2,h3,h4': {
              color: theme('colors.gray.100'),
            },
            hr: { borderColor: theme('colors.gray.700') },
            'ol li:before': {
              color: theme('colors.gray.400'),
            },
            'ul li:before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: { color: theme('colors.gray.200') },
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
  plugins: [require('@tailwindcss/typography')],
}
