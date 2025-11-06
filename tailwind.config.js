/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'cordyceps': {
          DEFAULT: '#84B526',
          50: '#F0F7E0',
          100: '#E2F0C1',
          200: '#C8E488',
          300: '#AED84F',
          400: '#94CC16',
          500: '#84B526',
          600: '#6A911F',
          700: '#506D17',
          800: '#36490F',
          900: '#1C2508',
        }
      }
    },
  },
  plugins: [],
}