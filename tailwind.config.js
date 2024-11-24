/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',  // Enable dark mode based on the class (not the media query)
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'scale-up': 'scaleUp 0.5s ease-out',
      },
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 },
      },
      scaleUp: {
        '0%': { transform: 'scale(0.95)' },
        '100%': { transform: 'scale(1)' },
      },
    },
  },
  plugins: [require('daisyui')],
}
