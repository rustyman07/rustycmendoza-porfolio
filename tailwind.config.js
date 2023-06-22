/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // "primary-yellow": "#F5CB5B",
        primary: {
          yellow: "#F5CB5B",
          black: "#1E1E1E",
        },
        secondary: {
          black: "#252525",
          white: "#f0f2f5",
          yellow: "#cca741",
        },
        tertiary: {
          black: "#3d3e3f",
        },
        light: {
          black: "#999999",
        },
      },
      fontFamily: {
        poppins: ["Poppins"],
        montserrat: ["Montserrat"],
      },
      fontSize: {
        xxs: ["10px", "14px"],
      },
    },
  },
};
