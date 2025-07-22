// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['"Nunito"', "sans-serif"],
        fredoka: ['"Fredoka"', "sans-serif"],
        quicksand: ['"Quicksand"', "sans-serif"],
        grotesk: ['"Space Grotesk"', 'sans-serif'],
      },
      colors: {
        'indigo': '#5c6ac4',
      },
    },
  },
  plugins: [],
};
