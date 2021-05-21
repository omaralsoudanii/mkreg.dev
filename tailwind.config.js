const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/data/**/*.{mdx}',
  ],
  darkMode: 'class', // 'media' or 'class'
  theme: {
    lineClamp: {
      1: 1,
      2: 2,
      3: 3,
      5: 5,
    },
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
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      lineHeight: {
        normal: '1.5', // 29.25px
        relaxed: '1.75', // 37.324px
      },
      colors: {
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
          900: '#111111',
        },
        dark: 'rgb(22, 27, 34)',
      },
      boxShadow: {
        white: '0px 0px 0px #ffffff',
        whiteHover: '0px 2px 0px #ffffff',
        black: '0px 0px 0px #000000',
        blackHover: '0px 2px 0px #000000',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.black'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.400'),
            },
            fontSize: '1.125em',
            lineHeight: theme('lineHeight.normal'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
            },
            h2: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
            },
            h3: {
              color: theme('colors.black'),
              fontWeight: '550',
            },
            'h4,h5,h6': {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.medium'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.800'),
              top: '0.55em',
            },
            a: {
              textDecoration: 'none',
              color: 'inherit',
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
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
                color: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.333em',
            lineHeight: theme('lineHeight.relaxed'),
          },
        },
        dark: {
          css: {
            color: theme('colors.white'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.700'),
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white'),
            },
            borderColor: theme('colors.gray.400'),
            'ul > li::before': {
              backgroundColor: theme('colors.gray.300'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.semibold'),
            },
            thead: {
              color: theme('colors.white'),
              borderBottomColor: theme('colors.gray.300'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.300'),
              },
            },
            blockquote: {
              color: theme('colors.white'),
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
          fontWeight: theme('fontWeight.bold'),
          letterSpacing: '-.022em',
        },
        h2: {
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-.011em',
        },
        h3: {
          fontWeight: '550',
          letterSpacing: '-.011em',
        },
        'h4,h5,h6': {
          fontWeight: theme('fontWeight.medium'),
          letterSpacing: 'normal',
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
