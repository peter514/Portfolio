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
        heroBg: "url('/c/assets/graphics/herob.jpg')"
      }
    },
  },
  plugins: [],
}
