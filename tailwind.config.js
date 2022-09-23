/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'google': ['Poppins', 'sans-serif'] 
      },
      colors: {
        'github-blue': '#161b22',
        'github-darker-blue': '#0d1117',
        'github-medium-blue': '#394c5d',
        'github-light-blue': '#394c5d',
        'github-grey': '#8b9095',
        'github-darker-grey': '#21262c',
        'github-another-grey': '#c9d1d9',
        'github-other-blue': '#58a6ff',
        'search' : '#0d1117',
        'github-border' : '#30363d',
      
      },
      width: {
        '128': '520px',
      }
    },
  },
  plugins: [],
}