/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        "5xl": 1064,
      },
      animation: {
        pulse: "pulse 4s cubic-bezier(0.4, 0, 0.6, 1)",
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};
