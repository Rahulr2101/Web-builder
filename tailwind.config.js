/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary:'#00070E',
        secondary:"#01060B",
        border:"#0C121A"
      }
    },
  },
  plugins: [],
}