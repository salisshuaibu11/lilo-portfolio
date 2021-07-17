const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'btnOrange': '#FF5C00',
        'cartonBrown': '#F5E6CA',
        'checkerWhite': '#F9F9F9',
        'sky': colors.sky,
        'cyan': colors.cyan,
        'coolGray': colors.coolGray,
        'lime': colors.lime,
        'orange': colors.orange,
        'emerald': colors.emerald,
        'green': colors.green
      }
	  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
