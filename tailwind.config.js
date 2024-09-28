/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        mainPrimary: '#1D2D44', // Nome da cor personalizada
        lightMainPrimary: '#3E5C76'
      },
    },
  },
  plugins: [],
};
