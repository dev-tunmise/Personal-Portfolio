/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./src/**/*.{js,css}", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0A192F',
        'orange': '#FF6B35',
        'light-gray': '#F5F5F5'
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
}
