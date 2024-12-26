/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      PrimaryTitle: '#127369',
      PrimaryContent: '#4A5958',
      PrimarySubContent: '#8AA6A3',
      PrimaryBase: '#4C5958',
      PrimaryAccent: '#104038',
      PrimaryBg: '#BFBFBF',

      
    },},
  },
  plugins: [],
}

