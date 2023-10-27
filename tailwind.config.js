/** @type {import('tailwindcss').Config} */

export default {
  content: ["./public/index.html", "./source/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      darkGray: "#2f2f2f",
      lightGray: "#c2c2c2",
      primary: "#d71a00",
      white: "#FFFFFF",
      black: "#000000",
    },
  },
  plugins: [],
};
