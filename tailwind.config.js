/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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
        "clip-mobile": {
          "0%": { clipPath: "polygon(100% 0, 0 0, 0 0, 100% 0)" },
          "100%": { clipPath: "polygon(100% 0, 100% 0, 100% 100%, 0 100%)" },
        },
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        clip: "clip 1s ease-in-out forwards",
        "clip-mobile": "clip-mobile 1s ease-in-out forwards",
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
        border: "#222222",
        secondary: "#545454",
        tertiary: "#161616",
        text: "#a3a3a3",
      },
    },
  },
  plugins: [],
};
