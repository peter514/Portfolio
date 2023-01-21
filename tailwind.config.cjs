/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ff1616",
        secondary: "#d9d9d9",
        tertiary: "#000"
      },
      backgroundImage: {
        heroBg: "url('https://github.com/peter514/Portfolio/blob/main/src/assets/graphics/herob.jpg?raw=true')"
      }
    },
  },
  plugins: [],
}
