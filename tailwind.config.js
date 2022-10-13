/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        1: '1px',
      },
      fontFamily:{
        'poppins': ['Poppins', 'sans-serif']
      },
      gridTemplateRows: {
        7: "repeat(7, minmax(0, 1fr))",
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeart(9, minmax(0, 1rf))",
        10: "repeart(10, minmax(0, 1rf))",
        16: "repeart(16, minmax(0, 1rf))",
      },
      gridRow: {
        'span-8': 'span 8',
        'span-9': 'span 9 ',
        'span-10': 'span 10 ',
        'span-12': 'span 12'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}
