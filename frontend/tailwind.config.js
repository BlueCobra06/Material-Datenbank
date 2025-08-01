/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f4ff',
            100: '#e0e9ff', 
            200: '#c7d6fe',
            300: '#a5b8fc',
            400: '#818df8',
            500: '#667eea',  // MT Aerospace Blau
            600: '#5a67d8',
            700: '#4c51bf',
            800: '#434190',
            900: '#3c366b',
          }
        }
      },
    },
    plugins: [],
  }