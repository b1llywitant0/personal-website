/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        marquee: 'marquee 20s linear infinite',
        marquee2: 'marquee2 20s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      colors: {
        background: {
          light: '#f9fafb', // Light gray
          dark: '#111827', // Charcoal
        },
        surface: {
          light: '#ffffff', // White card
          dark: '#1f2937', // Slate card
        },
        text: {
          base: '#111827', // Light mode text
          muted: '#6b7280',
          inverted: '#f9fafb', // Dark mode text
        },
        accent: {
          DEFAULT: '#3b82f6', // Sky 500
          light: '#60a5fa', // Sky 400
          dark: '#2563eb', // Sky 600
        },
      },
      backgroundImage: {},
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          /* Chrome, Safari and Opera */
          '&::-webkit-scrollbar': {
            display: 'none',
          },
          /* Firefox */
          scrollbarWidth: 'none',
          /* IE and Edge */
          '-ms-overflow-style': 'none',
        },
        '.pause': {
          'animation-play-state': 'paused',
        },
      })
    }),
  ],
}
