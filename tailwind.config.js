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
        '"HK Grotesk", Inter, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
      sans:
        'Lato, Inter, ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji',
    },
    extend: {
      lineHeight: {
        normal: '1.5rem',
        relaxed: '1.7777778rem',
      },
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
          1000: '#0b0b0b',
        },
        white: '#ffffff',
        black: '#000000',
        dark: 'rgb(14, 20, 27)',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.1000'),
            '*,*::before,*::after': {
              borderColor: theme('colors.gray.400'),
            },
            fontSize: '1.125rem',
            lineHeight: theme('lineHeight.normal'),
            'h1,h2,h3,h4,h5,h6': {
              color: theme('colors.black'),
              fontFamily: theme('fontFamily.display'),
            },
            'ul > li::before': {
              backgroundColor: theme('colors.gray.700'),
              top: '0.4555555em',
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
            },
          },
        },
        lg: {
          css: {
            fontSize: '1.25rem',
            lineHeight: theme('lineHeight.relaxed'),
            'ul>li:before': {
              top: '0.4555555em',
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
          letterSpacing: '-.01em',
          fontSize: '2.6666667em',
          fontWeight: theme('fontWeight.extrabold'),
        },
        h2: {
          letterSpacing: '-0.01em',
          fontSize: '1.6666667em',
          fontWeight: theme('fontWeight.bold'),
        },
        h3: {
          letterSpacing: '-0.01em',
          fontSize: '1.3333333em',
          fontWeight: theme('fontWeight.bold'),
        },
        'h4,h5,h6': {
          letterSpacing: '-0.01em',
          fontSize: '1.125em',
          fontWeight: theme('fontWeight.semibold'),
        },
      })
    }),
    require('@tailwindcss/typography'),
    require('tailwindcss-line-clamp'),
  ],
}
