/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e9edff',
          200: '#cfd8ff',
          300: '#a9b6ff',
          400: '#7a89ff',
          500: '#5563ff',
          600: '#3b48e6',
          700: '#2f39b4',
          800: '#262f8f',
          900: '#232b78'
        }
      }
    }
  },
  plugins: []
};
