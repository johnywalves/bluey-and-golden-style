/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        golden: "#e59b28",
      },
    },
    fontFamily: {
      sans: ["Roboto", "Open-Sans", "sans-serif"],
      serif: ["serif"],
    },
  },
  plugins: [],
};
