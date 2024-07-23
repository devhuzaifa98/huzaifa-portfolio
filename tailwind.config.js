/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ["var(--font-inter)"],
      },
      keyframes: {
        clip: {
          "0%": { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)" },
          "100%": { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        clip: "clip 1s ease-in-out forwards",
        fadeIn: "fadeIn 1s ease-in-out forwards",
      },
      colors: {
        shamrock: {
          50: "#eafff4",
          100: "#ccffe3",
          200: "#9dfdcc",
          300: "#5ef7b3",
          400: "#3feba4",
          500: "#00cf7e",
          600: "#00a968",
          700: "#008758",
          800: "#006b46",
          900: "#00573b",
          950: "#003123",
        },
      },
    },
  },
  plugins: [],
};
