/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    // "./node_modules/flowbite/**/*.js",
    // "./node_modules/tw-elements/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
],
  theme: {
    extend: {
      fontFamily: {
        family: ["Rubik", "sans-serif"],
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
    // require("tw-elements/plugin.cjs")
  ],
}

