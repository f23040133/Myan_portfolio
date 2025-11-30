module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        slatebg: '#0b1220',
        accent: '#06b6d4'
      },
      boxShadow: {
        'card-lg': '0 10px 30px rgba(2,6,23,0.6)'
      }
    }
  },
  plugins: []
}
