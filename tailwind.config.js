/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    screens: {
      'sm': '430px',
      'md': '515px',
    },
    extend: {
      fontFamily: {
        Outfit: ['Outfit', 'sans-serif'],
        YoungSerif: ['YoungSerif', 'sans-serif']
      },
    },
  },
  plugins: [],
}

