/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CD1B1B',
        accent1:"#f1f1f1",
        accent1hover: '#FFE8E8'
      },
      screens: {
        xs: '320px',
        sm1: '360px',
        md2: '768px',
        md3: '1250px',
        lg1: '1800px'
      }
    },
  },
  plugins: [],
}