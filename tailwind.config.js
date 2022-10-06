/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        DarkGreen: '#2F4F4F',
        LightGreen: '#008080',
    },
    fontFamily:{
      Gothic: ['Didact Gothic', 'sans-serif'],
      Poppins: ['Poppins', 'sans-serif'],
    }
  }, 
},
  plugins: [],
}