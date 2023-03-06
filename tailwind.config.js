module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // add new color
        "dark-blue": "#030f33"

      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}