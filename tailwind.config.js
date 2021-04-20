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
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        'gray-900': 'rgb(19 20 21)', //'rgb(19 20 21)',
        mk: {
          darkest: 'rgb(0 0 0)', // body light - activelink light
          darker: 'rgb(6 6 6)', // headings light
          dark: 'rgb(11 11 12)', // bg dark
          light: 'rgb(245 245 245)', // bg light
          lighter: 'rgb(250 250 250)', // headings dark
          lightest: 'rgb(255 255 255)', // body dark - activelink dark
        },
        lt: {
          lightest: '#f3f3f6',
          light: '#d8d8dc',
          medium: '#bcbcc0',
          dark: '#aeaeb2',
          darker: '#8e8e93',
          darkest: '#6c6c70',
        },
        dk: {
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
            lineHeight: theme('lineHeight.relaxed'),
            color: theme('colors.mk.darkest'),
            h1: {
              color: theme('colors.mk.darkest'),
            },
            h2: {
              color: 'rgb(10 10 10)',
            },
            'h3,h4,h5,h6': {
              color: 'rgb(20 20 20)',
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.lt.dark'),
              borderRadius: '50%',
            },
            a: {
              borderBottom: `2px dotted ${theme('colors.mk.dark')}`,
              color: theme('colors.mk.darkest'),
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
              },
            },
            blockquote: {
              color: theme('colors.lt.darkest'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.mk.lighter'),
            '*,*::before,*::after': {
              borderColor: theme('colors.dk.light'),
            },
            h1: {
              color: theme('colors.mk.lightest'),
            },
            h2: {
              color: 'rgb(245 245 245)',
            },
            'h3,h4,h5,h6': {
              color: 'rgb(240 240 240)',
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
              color: theme('colors.mk.lighter'),
              borderBottomColor: theme('colors.dk.light'),
            },
            a: {
              borderBottom: `2px dotted ${theme('colors.mk.light')}`,
              color: theme('colors.mk.lightest'),
              fontVariationSettings: '"wght" 500',
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.mk.lightest'),
                color: theme('colors.mk.darkest'),
                borderBottom: 'none',
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.dk.light'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.dk.darkest'),
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
