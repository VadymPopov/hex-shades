/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'dark-bg': '#030637',
        'dark-text': '#FA7D09',
        'dark-border': '#000272'
      }
    },
  },
  plugins: [],
}
