/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ai_blue: '#00d2ff',
        ai_purple: '#928dab',
      },
      backdropBlur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}