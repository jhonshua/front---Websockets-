/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.jsx"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/assets/background/fondo.jpg)",
      }
    },
  },
  plugins: [],
}
