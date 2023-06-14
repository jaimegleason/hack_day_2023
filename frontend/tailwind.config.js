/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/App.js", "./src/App.test.js", 
  "./src/index.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

