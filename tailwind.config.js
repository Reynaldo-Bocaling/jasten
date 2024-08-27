/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "10rem",
        "11xl": "11rem",
        "12xl": "12rem",
        "13xl": "13rem",
        "14xl": "14rem",
        "15xl": "17rem",
      },
      colors: {
        "yellow-10": "rgb(249, 200, 22)",
        "red-10": "rgb(249, 22, 22)",
      },
      backgroundColor: {
        "red-10": "rgb(249, 22, 22)",
      },
    },
  },
  plugins: [],
};
