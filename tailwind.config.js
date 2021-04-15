/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.tsx',
    './src/components/**/*.tsx',
    './src/**/*.ts',
    './src/**/*.js',
    './public/**/*.html',
    './index.html',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontFamily: {
      display: [
        '"Inter var"',
        'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      ],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        'gray-900': 'rgb(19 20 21)', //'rgb(19 20 21)',
        mk: {
          darkest: 'rgb(0 0 0)', // body light - activelink light
          darker: 'rgb(6 6 6)', // headings light
          dark: 'rgb(10 10 10)', // bg dark
          light: 'rgb(245 245 245)', // bg light
          lighter: 'rgb(250 250 250)', // headings dark
          lightest: 'rgb(255 255 255)', // body dark - activelink dark
        },
        lt: {
          bg: 'rgb(245 245 245)',
          body: 'rgb(0 0 0)',
          headings: 'rgb(6 6 6)',
          secondary: '#fac24f',
          tertiary: '#d70015',
          quaternary: '#a05a00',
          black: 'rgb(6 5 6)',
          white: 'rgb(255 255 255)',
          'active-link': 'rgb(0 0 0)',
          lightest: '#f3f3f6',
          light: '#d8d8dc',
          medium: '#bcbcc0',
          dark: '#aeaeb2',
          darker: '#8e8e93',
          darkest: '#6c6c70',
        },
        dk: {
          bg: 'rgb(0 0 0)',
          body: 'rgb(250 250 250)',
          headings: 'rgb(255 255 255)',
          primary: '#409cff',
          'primary-light': 'color(#409cff a(25%))',
          'primary-lightest': 'color(#409cff a(10%))',
          secondary: '#ffd426',
          tertiary: '#ff6961',
          quaternary: '#ffd426',
          black: 'rgb(255 255 255)',
          white: 'rgb(0 0 0)',
          'active-link': 'rgb(255 255 255)',
          lightest: '#242426',
          light: '#363638',
          medium: '#444446',
          dark: '#545456',
          darker: '#7c7c80',
          darkest: '#aeaeb2',
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*,*::before,*::after': {
              borderColor: theme('colors.lt.light'),
            },
            color: theme('colors.mk.darkest'),
            h1: {
              color: theme('colors.mk.darkest'),
            },
            h2: {
              color: theme('colors.mk.darkest'),
            },
            h3: {
              color: theme('colors.mk.darkest'),
            },
            h4: {
              color: theme('colors.mk.darkest'),
            },
            h5: {
              color: theme('colors.mk.darkest'),
            },
            h6: {
              color: theme('colors.mk.darkest'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.lt.dark'),
              borderRadius: '50%',
            },
            a: {
              borderBottom: `1px dotted ${theme('colors.lt.darker')}`,
              color: theme('colors.current'),
              fontVariationSettings: '"wght" 500',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.mk.darkest'),
                color: theme('colors.mk.lightest'),
                borderBottom: 'none',
              },
            },
            strong: {
              color: theme('colors.mk.darkest'),
            },
            thead: {
              borderBottomColor: theme('colors.lt.light'),
            },
            borderColor: theme('colors.lt.light'),
            tbody: {
              tr: {
                borderBottomColor: theme('colors.lt.light'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.lt.darkest'),
                fontFamily: theme('fontFamily.display'),
              },
            },
            blockquote: {
              color: theme('colors.lt.darkest'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.mk.lightest'),
            '*,*::before,*::after': {
              borderColor: theme('colors.dk.light'),
            },
            h1: {
              color: theme('colors.mk.lightest'),
            },
            h2: {
              color: theme('colors.mk.lightest'),
            },
            h3: {
              color: theme('colors.mk.lightest'),
            },
            h4: {
              color: theme('colors.mk.lightest'),
            },
            h5: {
              color: theme('colors.mk.lightest'),
            },
            h6: {
              color: theme('colors.mk.lightest'),
            },
            borderColor: theme('colors.dk.light'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.dk.dark'),
              borderRadius: '50%',
            },
            strong: {
              color: theme('colors.mk.lightest'),
            },
            thead: {
              color: theme('colors.mk.lightest'),
              borderBottomColor: theme('colors.dk.light'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.dk.light'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.dk.darkest'),
                fontFamily: theme('fontFamily.display'),
              },
            },
            blockquote: {
              color: theme('colors.dk.darkest'),
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
