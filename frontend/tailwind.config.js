/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {

    extend: {
      keyframes: {
        looseBulb: {
          '0%, 100%': { opacity: '1' },
          '10%': { opacity: '1  ' },
          '20%': { opacity: '0.7' },
          '30%': { opacity: '0.7' },
          '40%': { opacity: '1' },
          '50%': { opacity: '0.7' },
          '60%': { opacity: '0.9' },
          '70%': { opacity: '1'},
          '80%': { opacity: '1' },
          '90%': { opacity: '0.9  ' },
        },
      },
      animation: {
        looseBulb: 'looseBulb 5s infinite',
      },
    },

    fontFamily: {
      Bangers: ["Bangers", "system-ui"],
      pacifico: ["Pacifico", "cursive"],
      Bebas : ["Bebas Neue", " sans-serif"],


     }
  },
  plugins: [plugin(function ({ matchUtilities, theme }) {
    matchUtilities(
      {
        'text-shadow': (value) => ({
          textShadow: value,
        }),
      },
      { values: theme('textShadow') }
    )
  }),    require('tailwind-scrollbar-hide')],

}
