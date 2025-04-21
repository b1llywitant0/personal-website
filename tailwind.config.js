/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

export default {
  darkMode: 'class',
  theme: {
    extend: {
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
      backgroundImage: {
        beach: "url('/src/assets/img/water-banner.png')",
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
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
      });
    }),
  ],
}
