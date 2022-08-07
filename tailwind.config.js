/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      keyframes: {
        "fade-in-down": {
          "0%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        "fade-out-up": {
          from: {
            opacity: "1",
            transform: "translateY(0px)",
          },
          to: {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        "spin-in": {
          from: {
            transform: "rotate(0deg)",
            opacity: "0",
          },
          to: {
            transform: "rotate(12deg)",
            opacity: "1",
          },
        },
      },
      animation: {
        "fade-in-down": "fade-in-down 0.5s ease-in",
        "fade-out-up": "fade-out-up 0.5s ease-in",
        "spin-in": "spin 1.5s ease-in-out",
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("not-last", "&:not(:last-child)");
    }),
  ],
};
