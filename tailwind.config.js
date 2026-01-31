/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'agab-red': '#E60000', // Assuming a red from the logo descriptions
        'agab-black': '#000000',
        'agab-white': '#FFFFFF',
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'nike': ['Oswald', 'sans-serif'], // Added for Nike-like headlines
      }
    },
  },
  plugins: [],
}
