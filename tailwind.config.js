/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    // path dari content bergantung terhadap lokasi file index.html
    content: ["./*.{html,js,css}"],
    theme: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
        almarai: ['Almarai', 'sans-serif'],
        elmessiri: ['El Messiri', 'sans-serif']
      },
      extend: {
        // extend digunakan untuk menambah (extend) class layouting bawaan tailwind
      },
    },
    plugins: [],
  }