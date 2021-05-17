const plugin = require('tailwindcss/plugin')

module.exports = {
  mode: 'jit',
  purge: [
    './src/pages/**/*.{tsx,ts}',
    './src/components/**/*.{tsx,ts}',
    './src/pages/*.{tsx,ts}',
    './src/components/*.{tsx,ts}',
    './src/data/*.mdx',
    './src/data/**/*.mdx',
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
        normal: '1.6', // 28px
        relaxed: '1.65', // 36.3px
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
          900: '#171717',
        },
        dark: 'rgb(14, 20, 27)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
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
              top: '0.7em',
              width: '.275em',
              height: '.275em',
            },
            a: {
              textDecoration: 'none',
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
              color: theme('colors.gray.900'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.375em',
            lineHeight: theme('lineHeight.relaxed'),
            'ul > li::before': {
              top: '0.65em',
            },
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
          letterSpacing: '-.015em',
        },
        h2: {
          fontWeight: theme('fontWeight.semibold'),
          letterSpacing: '-.01em',
        },
        h3: {
          fontWeight: '550',
          letterSpacing: '-.01em',
        },
        'h4,h5,h6': {
          fontWeight: theme('fontWeight.medium'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
