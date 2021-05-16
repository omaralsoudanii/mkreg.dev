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
      display:
        '"HK Grotesk", Inter, ui-sans-serif, Roboto, "Helvetica Neue", sans-serif',
      sans: 'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
    extend: {
      lineHeight: {
        normal: '1.4', // 22.5px
        relaxed: '1.5', // 30px
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
          1000: '#0b0b0b',
        },
        dark: 'rgb(14, 20, 27)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.1000'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.400'),
            },
            letterSpacing: '-0.01em',
            lineHeight: theme('lineHeight.normal'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.black'),
              letterSpacing: 'normal',
              fontFamily: theme('fontFamily.display'),
            },
            h2: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.extrabold'),
              letterSpacing: 'normal',
              fontFamily: theme('fontFamily.display'),
            },
            h3: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
              letterSpacing: 'normal',
              fontFamily: theme('fontFamily.display'),
            },
            'h4,h5,h6': {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.semibold'),
              letterSpacing: 'normal',
              fontFamily: theme('fontFamily.display'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700'),
              top: '0.55555em',
            },
            a: {
              textDecoration: 'none',
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
              color: theme('colors.gray.1000'),
              fontWeight: theme('fontWeight.normal'),
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.25em',
            lineHeight: theme('lineHeight.relaxed'),
            'ul>li:before': {
              top: '0.5em',
            },
          },
        },
        dark: {
          css: {
            color: theme('colors.gray.50'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.700'),
            },
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.white'),
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
            blockquote: {
              color: theme('colors.gray.50'),
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
          letterSpacing: 'normal',
          fontWeight: theme('fontWeight.black'),
          fontFamily: theme('fontFamily.display'),
        },
        h2: {
          letterSpacing: 'normal',
          fontWeight: theme('fontWeight.extrabold'),
          fontFamily: theme('fontFamily.display'),
        },
        h3: {
          letterSpacing: 'normal',
          fontWeight: theme('fontWeight.bold'),
          fontFamily: theme('fontFamily.display'),
        },
        'h4,h5,h6': {
          letterSpacing: 'normal',
          fontWeight: theme('fontWeight.semibold'),
          fontFamily: theme('fontFamily.display'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
