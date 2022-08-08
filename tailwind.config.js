/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "spin-in": {
          from: {
            opacity: "0",
          },
          to: {
            transform: "rotate(45deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "spin-in": "spin 1.5s ease-out",
      },
    },
  },
};
