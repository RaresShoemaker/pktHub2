/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0D4AE7',
        secondary: '#848484',
        bg: '#1b215d'
      },
      backgroundImage: {
        'gradient-custom': 'linear-gradient(180deg, rgba(9, 13, 35, 0.79), rgba(29, 35, 67, 0.79))',
        'gradient-blur': 'linear-gradient(180deg, rgba(44, 74, 194, 0) 0%, rgba(4, 10, 31, 0.8) 55.5%, #000000 100%)',
      },
      blur: {
        '84': '84.2105px',
      }
    },
  },
  plugins: [],
}