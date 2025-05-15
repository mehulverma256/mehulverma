/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          400: "#818CF8", // Indigo-400
          500: "#6366F1", // Indigo-500
          600: "#4F46E5", // Indigo-600
          700: "#4338CA", // Indigo-700
        },
        screens: {
          xs: "475px",
        },
      },
    },
  },
  plugins: [],
};
