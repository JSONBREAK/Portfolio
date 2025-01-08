/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {colors: {
      PrimaryTitle: '#5dbf4e',
      PrimarySubtitle: '#498c3f',
      PrimaryContent: '#8f96a6',
      PrimarySubContent: '#8f96a6',
      PrimarySubContent1: '#4b4f58',
      PrimarySubContent2: '#3037304D',
      PrimaryBase: '#4C5958',
      PrimaryAccent: '#104038',
      PrimaryBg: '#0d0d0d',
      PrimaryTest: '#030605',
      PrimaryBtnFade:'#386f30',
      primaryHeader:'#fff'
    },},
  },
  plugins: [],
}

