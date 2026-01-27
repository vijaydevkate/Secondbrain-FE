// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          200: '#eeeeef',
          400: '#e6e9ed',
          600: '#95989c',
        },
        purple: {
          200: '#d9ddee',
          400: '#9493db',
          600: '#7164c0',
        },
      },
    },
  },
  plugins: [],
};