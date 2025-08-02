/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        playwrite: ["Playwrite AU QLD", "cursive"],
        sans: ["Inter", "sans-serif"],
        cursive: ["Playwrite AU QLD", "cursive"],
      },
      keyframes: {
        floating: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: 0.2, transform: "scale(0.9)" },
          "50%": { opacity: 1, transform: "scale(1.1)" },
        },
      },
      animation: {
        floating: "floating 3s ease-in-out infinite",
        twinkle: "twinkle 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
