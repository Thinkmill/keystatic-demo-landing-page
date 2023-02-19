/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "blob-1": "rgb(227,169,193)",
        "blob-2": "rgb(207,188,220)",
        "blob-3": "rgb(244,221,205)",
      },
      maxWidth: {
        "5xl": 1064,
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0,  0px)" },
          "25%": { transform: "translate(-50px, 100px)" },
          "50%": { transform: "translate(0, 200px)" },
          "75%": { transform: "translate(50px, 100px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        float2: {
          "0%": { transform: "translate(0,  0px)" },
          "25%": { transform: "translate(-100px, 50px)" },
          "50%": { transform: "translate(-200px, 0px)" },
          "75%": { transform: "translate(-100px, -50px)" },
          "100%": { transform: "translate(0, 0)" },
        },
        fadeIn: {
          from: { opacity: 0.2, transform: "translateY(-2px)" },
          to: { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        float: "float 5s linear infinite",
        float2: "float2 5s linear infinite",
        fadeIn: "fadeIn 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
