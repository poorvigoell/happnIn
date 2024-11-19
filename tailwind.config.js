/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Extend to ensure full viewport usage for body and containers
      screens: {
        'xs': '320px', // Define screen breakpoints if necessary
      },
      spacing: {
        'full-screen': '100vh', // To use full viewport height
      },
      colors: {
        primary: '#00d9a1', // Example primary color
        backgroundDark: '#0b0b0b',
        backgroundLight: '#1a1a1a',
        textLight: 'rgba(255, 255, 255, 0.87)',
        textMuted: '#aaa',
        'custom-teal': '#25bfbd', 
      },
    },
  },
  plugins: [],
};

