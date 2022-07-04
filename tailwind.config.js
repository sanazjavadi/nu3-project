/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
  },
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
