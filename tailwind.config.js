/** @type {import('tailwindcss').Config} */

export default {
  content: ["./public/index.html", "./source/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#d71a00",
      darkGray: "#2f2f2f",
      lightGray: "#c2c2c2",
    },
  },
  plugins: [],
};
