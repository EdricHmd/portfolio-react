/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'rgb(145, 75, 241)',
          dark: '#9333ea',
        },
        dark: {
          DEFAULT: '#111',
          card: '#222',
          sidebar: 'rgb(39, 40, 41)',
        }
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      spacing: {
        '7.5': '1.875rem',
        '15': '3.75rem',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
}
