/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ponl: "#BBB6FC",
        lfoj: "#ABE1FA"
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        arabic: ['Almarai', 'sans-serif']
      }
    },
  },
  plugins: [],
}