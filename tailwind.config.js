module.exports = {
  mode: 'jit',
  purge: ['./src/pages/**/*.tsx', './src/components/**/*.tsx', './src/**/*.ts'],
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
            lineHeight: '1.65',
            p: {
              lineHeight: theme('lineHeight.normal'),
            },
            color: theme('colors.gray.1000'),
            h1: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.extrabold'),
              fontSize: '2.25rem',
              letterSpacing: '-.03em',
            },
            h2: {
              color: theme('colors.gray.1000'),
              fontSize: '1.875rem',
              fontWeight: theme('fontWeight.bold'),
              lineHeight: theme('lineHeight.tight'),
            },
            h3: {
              color: theme('colors.gray.1000'),
              fontSize: '1.5rem',
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.tight'),
            },
            h4: {
              color: theme('colors.gray.1000'),
              fontSize: '1.25rem',
              fontWeight: theme('fontWeight.semibold'),
              lineHeight: theme('lineHeight.snug'),
            },
            'h5,h6': {
              fontSize: '1.125rem',
              lineHeight: theme('lineHeight.snug'),
              fontWeight: theme('fontWeight.meduim'),
              color: theme('color.gray.1000'),
            },
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.400'),
              borderRadius: '50%',
            },
            a: {
              color: '#0070f3',
              textDecoration: 'none',
              outline: theme('outline.none'),
              fontWeight: theme('fontWeight.meduim'),
            },
            strong: {
              color: theme('colors.black'),
              fontWeight: theme('fontWeight.bold'),
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
            borderColor: theme('colors.gray.700'),
            'ul > li::before': {
              content: '""',
              position: 'absolute',
              backgroundColor: theme('colors.gray.600'),
              borderRadius: '50%',
            },
            a: {
              color: '#68b5fb',
              textDecoration: 'none',
              outline: theme('outline.none'),
              'text-shadow': '0px 0px 1px #0070f3',
              fontWeight: theme('fontWeight.meduim'),
            },
            strong: {
              color: theme('colors.white'),
              fontWeight: theme('fontWeight.bold'),
            },
            thead: {
              color: theme('colors.gray.50'),
              borderBottomColor: theme('colors.gray.700'),
            },
            tbody: {
              tr: {
                borderBottomColor: theme('colors.gray.700'),
              },
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
