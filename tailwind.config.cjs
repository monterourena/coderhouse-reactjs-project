/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:"rgb(4, 141, 201)",
        secondary:"rgb(0, 84, 181)",
        background:"#F9F9F9"
      }
    },
  },
  plugins: [],
}



