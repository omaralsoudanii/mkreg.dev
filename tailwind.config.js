const { fontFamily } = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx'],
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
      sans: ['Inter', ...fontFamily.sans],
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
              borderColor: theme('colors.gray.400'),
            },
            letterSpacing: '-0.01em',
            p: {
              lineHeight: '1.625',
            },
            'ul > li > p': {
              paddingTop: '0.15em',
            },
            h1: {
              color: theme('colors.black'),
            },
            'h2,h3,h4,h5,h6': {
              color: theme('colors.gray.1000'),
            },
            color: theme('colors.gray.1000'),
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700'),
            },
            a: {
              textDecoration: 'none',
              fontWeight: '400',
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              borderBottomColor: theme('colors.gray.700'),
            },
            borderColor: theme('colors.gray.400'),
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
        lg: {
          css: {
            p: {
              lineHeight: '1.625',
            },
            'ul > li > p': {
              paddingTop: '0.15em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.700'),
            },
            h1: {
              color: theme('colors.white'),
            },
            'h2,h3,h4,h5,h6': {
              color: theme('colors.gray.50'),
            },
            borderColor: theme('colors.gray.400'),
            'ul > li::before': {
              backgroundColor: theme('colors.gray.400'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.50'),
              borderBottomColor: theme('colors.gray.400'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.400'),
              },
            },
          },
        },
      }),
    },
  },
  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        h1: {
          letterSpacing: '-.03em',
          fontSize: '2.25em',
          fontWeight: theme('fontWeight.extrabold'),
        },
        h2: {
          letterSpacing: '-0.025em',
          fontSize: '1.5em',
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          letterSpacing: '-0.025em',
          fontSize: '1.25em',
          fontWeight: theme('fontWeight.semibold'),
        },
        'h4,h5,h6': {
          letterSpacing: '-0.025em',
          fontSize: '1.125em',
          fontWeight: theme('fontWeight.meduim'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
