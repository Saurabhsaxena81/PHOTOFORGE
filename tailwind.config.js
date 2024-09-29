/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "increase-line": "increase 2s forwards",
      },
      colors: {
        customColor: "#FF5733", // Replace with your desired color
      },
      keyframes: {
        increase: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
    },
  },
  plugins: [require("daisyui")],
};
