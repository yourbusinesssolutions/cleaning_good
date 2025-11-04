/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          50: '#eff8fe',
          100: '#def2fd',
          200: '#bee4fb',
          300: '#9ed7f9',
          400: '#5ebcf5',
          500: '#1C99DE', // Main brand color
          600: '#1887c8',
          700: '#1471a4',
          800: '#105b84',
          900: '#0c476a',
          950: '#09354f',
        },
      },
    },
  },
  plugins: [],
}