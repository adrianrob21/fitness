/** @type {import('tailwindcss').Config} */

export default {
  content: ["./public/index.html", "./source/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      darkGray: "#2f2f2f",
      lightGray: "#c2c2c2",
      primary: {
        500: "#ff624d",
        900: "#d71a00",
      },
      white: "#FFFFFF",
    },
  },
  plugins: [],
};
