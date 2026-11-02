/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        magenta: {
          50: '#fdf2f6',
          100: '#fbe4ed',
          200: '#f4bdd6',
          300: '#e889b2',
          400: '#d84f8b',
          500: '#b8256a',
          600: '#941a54',
          700: '#731347',
          800: '#570f38',
          900: '#3d0a28',
          950: '#280619',
        },
        gold: {
          50: '#fdf9ec',
          100: '#faf0c9',
          200: '#f3dd8f',
          300: '#ecc658',
          400: '#e4ad33',
          500: '#cf8f22',
          600: '#a9701b',
          700: '#86551a',
          800: '#6e461c',
          900: '#5e3c1d',
        },
        parchment: {
          50: '#fffdf7',
          100: '#fbf2de',
          200: '#f5e5c0',
          300: '#ecd6a0',
          400: '#e0c07c',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        display: ['"Cinzel Decorative"', '"Cinzel"', 'serif'],
        heading: ['"Cinzel"', 'serif'],
        serif: ['"Playfair Display"', 'serif'],
        body: ['"Cormorant Garamond"', 'serif'],
      },
      backgroundImage: {
        'radial-fade': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      },
      keyframes: {
        pulseSoft: {
          '0%, 100%': { opacity: '0.6', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.04)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        pulseSoft: 'pulseSoft 2.4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        float: 'float 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
