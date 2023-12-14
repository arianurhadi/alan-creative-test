/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#08acec',
        success: '#80ac84',
        danger: '#d03d3e'
      },
    },
  },
  plugins: [],
}

