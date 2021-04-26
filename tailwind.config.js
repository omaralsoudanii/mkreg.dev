/* eslint-disable @typescript-eslint/no-var-requires */
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
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      5: 5,
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
    },
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        gray: {
          50: '#fafafa',
          100: '#f5f5f5',
          200: '#e5e5e5',
          300: '#d8d8dc',
          400: '#aeaeb2',
          500: '#737373',
          600: '#545456',
          700: '#363638',
          800: '#262626',
          900: '#171717',
          1000: '#0b0b0c',
          1100: '#050505',
        },
        white: '#ffffff',
        black: '#000000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.300'),
            },
            lineHeight: theme('lineHeight.relaxed'),
            color: theme('colors.black'),
            h1: {
              color: theme('colors.black'),
            },
            'h2,h3,h4,h5,h6': {
              color: theme('color.gray.1000'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.400'),
              borderRadius: '50%',
            },
            a: {
              borderBottom: `2px dotted ${theme('colors.gray.1000')}`,
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.black'),
                color: theme('colors.white'),
                borderBottom: 'none',
              },
            },
            strong: {
              color: theme('colors.black'),
            },
            thead: {
              borderBottomColor: theme('colors.gray.300'),
            },
            borderColor: theme('colors.gray.300'),
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.gray.400'),
              },
            },
            blockquote: {
              color: theme('colors.gray.400'),
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.white'),
            },
            'h2,h3,h4,h5,h6': {
              color: theme('colors.gray.100'),
            },
            borderColor: theme('colors.gray.700'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.600'),
              borderRadius: '50%',
            },
            strong: {
              color: theme('colors.white'),
            },
            thead: {
              color: theme('colors.mk.lighter'),
              borderBottomColor: theme('colors.gray.700'),
            },
            a: {
              borderBottom: `2px dotted ${theme('colors.gray.100')}`,
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.medium'),
              textDecoration: 'none',
              '&:hover': {
                backgroundColor: theme('colors.white'),
                color: theme('colors.black'),
                borderBottom: 'none',
              },
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
            },
            figure: {
              figcaption: {
                color: theme('colors.gray.400'),
              },
            },
            blockquote: {
              color: theme('colors.gray.400'),
            },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
