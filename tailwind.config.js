/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx}",
  ],
  theme: {
    screens: {
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    },
    extend: {
      fontFamily: {
        "maison_neue": ["Maison Neue", "sans-serif"],
        "orpheus_pro": ["Orpheus Pro", "sans-serif"],
      },
    },
    plugins: [],
  }
}