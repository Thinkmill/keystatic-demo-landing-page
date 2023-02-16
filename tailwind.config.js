/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
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
      },
      animation: {
        float: "float 5s linear infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
