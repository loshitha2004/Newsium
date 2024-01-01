/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        Primary:'#3A6B34',
        Secondary:'#CBD28F',
        Final:'#E3B448'
      },
      fontFamily:{
        Poppins:'Poppins'
      }
    },
  },
  plugins: [],
}

