/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'], // Adjust this to match your project structure
  theme: {
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          lightGrey: 'hsl(217, 12%, 63%)',
          darkBlue: 'hsl(213, 19%, 18%)',
          veryDarkBlue: 'hsl(216, 12%, 8%)',
        },
      },
      fontFamily: {
        overpass: ['Overpass', 'sans-serif'],
      },
      fontSize: {
        paragraph: '15px',
      },
    },
  },
  plugins: [],
}