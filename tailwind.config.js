/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary / envelope & footer background (muted sage green — "Sage Bloom" theme)
        rosewood: {
          DEFAULT: '#6E7D5E',
          dark: '#3F4A34',
          light: '#9AA38B',
        },
        // Heading & CTA accents (dusty bloom-pink)
        brick: '#9C5468',
        wine: {
          DEFAULT: '#A85C72',
          dark: '#7A3F50',
        },
        // Text
        charcoal: '#3E3B33',
        taupe: '#7C8370',
        // Card / page background (soft parchment cream)
        ivory: {
          DEFAULT: '#FBF6EA',
          card: '#FAF2DE',
        },
        // Brushed champagne gold accents
        champagne: {
          400: '#D4AF37',
          500: '#C5A059',
        },
        // Wax seal
        pearl: '#EDEADF',
        // Scratch-card foil
        terracotta: '#C17B86',
        // Inputs / inactive cards
        field: {
          bg: '#F1EEE2',
          border: '#DCE0D1',
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
