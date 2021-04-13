/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/*.tsx',
    './src/components/**/*.tsx',
    './src/data/**/*.mdx',
    './src/data/**/*.md',
    './src/lib/*.ts',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem',
    },
    fontFamily: {
      display: 'var(--font-display)',
      mono: 'var(--font-mono)',
    },
    extend: {
      colors: {
        gray: colors.trueGray,
        'gray-900': 'rgb(19 20 21)',
        blue: colors.lightBlue,
        lt: {
          bg: 'rgb(255 255 255)',
          body: 'rgb(0 0 0)',
          headings: 'rgb(6 5 6)',
          primary: '#0040dd',
          'primary-light': 'color(#0040dd l(90%))',
          'primary-lightest': 'color(#0040dd l(95%))',
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
            color: theme('colors.lt.body'),
            h1: {
              color: theme('colors.lt.headings'),
              fontSize: theme('fontSize.3xl'),
              marginTop: '0',
              marginBottom: '1rem',
            },
            h2: {
              color: theme('colors.lt.headings'),
            },
            h3: {
              color: theme('colors.lt.headings'),
            },
            h4: {
              color: theme('colors.lt.headings'),
            },
            h5: {
              color: theme('colors.lt.headings'),
            },
            h6: {
              color: theme('colors.lt.headings'),
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
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.lt.black'),
                color: theme('colors.lt.white'),
                borderBottom: 'none',
              },
            },
            strong: {
              color: theme('colors.lt.body'),
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
            color: theme('colors.dk.body'),
            '*,*::before,*::after': {
              borderColor: theme('colors.dk.light'),
            },
            h1: {
              color: theme('colors.dk.headings'),
            },
            h2: {
              color: theme('colors.dk.headings'),
            },
            h3: {
              color: theme('colors.dk.headings'),
            },
            h4: {
              color: theme('colors.dk.headings'),
            },
            h5: {
              color: theme('colors.dk.headings'),
            },
            h6: {
              color: theme('colors.dk.headings'),
            },
            borderColor: theme('colors.dk.light'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.dk.dark'),
              borderRadius: '50%',
            },
            a: {
              borderBottom: `1px dotted ${theme('colors.dk.darker')}`,
              color: theme('colors.current'),
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.dk.black'),
                color: theme('colors.dk.white'),
                borderBottom: 'none',
              },
            },
            strong: {
              color: theme('colors.dk.body'),
            },
            thead: {
              color: theme('colors.dk.body'),
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
  variants: {
    extend: {
      typography: ['dark'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
