/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        amazonclone: {
          background: '#EAEDED',
          light_blue: '#232F3A',
          yellow: '#FEBD69',
          DEFAULT: '#6366f1',
          // DEFAULT: '#10D48E'
        },
      },
    },
  },
  plugins: [],
}
