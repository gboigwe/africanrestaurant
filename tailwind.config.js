/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#FF6B35', // Orange
        secondary: '#5C4033', // Brown
        accent: '#E63946', // Red
        dark: '#1D1D1D', // Black
        light: '#F5F5DC', // Cream
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backgroundImage: {
        'yoruba-pattern': "url('/src/assets/yoruba-pattern.png')",
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
      },
    },
  },
  plugins: [],
};