/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
      'sm': { 'max': '719px'},

      'md': {'min': '719px', 'max': '1023px'},

      'lg': {'min': '1024px', 'max': '1279px'},

      'xl': {'min': '1280px', 'max': '1919px'},

      '2xl': {'min': '1920px'},
      },

    },
  },
  plugins: [require("daisyui")],
}

