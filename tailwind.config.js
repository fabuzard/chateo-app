/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        mulish: ['Mulish', 'sans-serif'],
      },
      margin: {
        '135': '8.4375rem',
        '42':'2.625rem'
      },
      colors:{
        'default' : '#002DE3',
        'active': '#0F1828',
        'disabled': '#ADB5BD',
        'offwhite': '#F7F7FC'
      }
    },
  },
  plugins: [],
}
