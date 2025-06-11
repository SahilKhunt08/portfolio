// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
        fredoka: ['"Fredoka"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
