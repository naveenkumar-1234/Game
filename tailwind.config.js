/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        teko:['Teko'],
        mons:['Montserrat']
      },
      colors:{
        primary:['#26002f'],
        secondary:['#a2038c'],
      }
    },
  },
  plugins: [],
  
}

