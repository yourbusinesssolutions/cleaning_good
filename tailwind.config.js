/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#f0f9fe',
          100: '#e1f3fd',
          200: '#c3e7fb',
          300: '#a5dbf9',
          400: '#6bc4f4',
          500: '#209BDD', // Main brand color
          600: '#1c89c7',
          700: '#1876a7',
          800: '#146287',
          900: '#104f6c',
          950: '#0d3c52',
        },
      },
    },
  },
  plugins: [],
}