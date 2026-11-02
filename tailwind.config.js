/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // Primary / envelope & footer background (deep vintage wine)
        rosewood: {
          DEFAULT: '#6B2A35',
          dark: '#4E1E27',
          light: '#87384A',
        },
        // Heading & CTA accents
        brick: '#873644',
        wine: {
          DEFAULT: '#9B3D4E',
          dark: '#7C2F3D',
        },
        // Text
        charcoal: '#4A3E3D',
        taupe: '#8C7E7D',
        // Card / page background
        ivory: {
          DEFAULT: '#FAF7F2',
          card: '#F9F5EF',
        },
        // Brushed champagne gold accents
        champagne: {
          400: '#D4AF37',
          500: '#C5A059',
        },
        // Wax seal
        pearl: '#ECE8E1',
        // Scratch-card foil
        terracotta: '#B85D65',
        // Inputs / inactive cards
        field: {
          bg: '#F3EDE6',
          border: '#E6DCD1',
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
