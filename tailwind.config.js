/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Cormorant: ["Cormorant Garamond", "serif"],
      Jost: ["Jost", "serif"],
    },

    extend: {
      colors: {
        brand: "#dd5903",
        brandBorder: "rgba(0, 0, 0, 0.1)",
      },
    },
  },
  plugins: [require("daisyui")],
};
