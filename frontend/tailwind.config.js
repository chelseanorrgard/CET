const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#FFCE1A',
      'secondary': '#0d0842',
      'blackBG': '#F3F3F3',
      'Favorite': '#FF5841',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      blue: colors.blue,
      green: colors.green,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      stone: colors.stone,
      sky: colors.sky,
      neutral: colors.neutral,
      gray: colors.gray,
      slate: colors.slate,
      red:colors.red
           
     
    },
    fontFamily:{
      'primary': ["Montserrat", "sans-serif"],
      'secondary': ["Nunito Sans", "sans-serif"],
    }
  },
  plugins: [],
}

