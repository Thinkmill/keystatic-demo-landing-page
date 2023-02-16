/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "5xl": 1064,
      },
      keyframes: {
        float: {
          "0%": { transform: "translate(0,  0px)" },
          "50%": { transform: "translate(0, 200px)" },
          "100%": { transform: "translate(0, -0px)" },
        },
      },
      animation: {
        float: "float 7s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
