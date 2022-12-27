const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      blue: colors.blue,
      red: colors.red,
      white: colors.white,
      gray: colors.gray,
      pink: colors.pink,
      primary: '#0855c4',
      secondary: '#ea0c90',
    },
    extend: {},
  },
  plugins: [],
}
