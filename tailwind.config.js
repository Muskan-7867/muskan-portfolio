/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: 'fadeIn 1s ease-in-out infinite',
        typing: 'typing 3.5s steps(40, end) infinite, blink .75s step-end infinite',
        slideIn: 'slideIn 10s ease-in-out infinite', 
        slideInFromRight: 'slideInFromRight 10s ease-in-out infinite', 
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
        typing: {
          '0%': { width: '0%' },
          '50%': { width: '100%' },
          '100%': { width: '0%' },
        },
        blink: {
          '50%': { borderColor: 'transparent' },
          '100%': { borderColor: 'white' },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '10%': { transform: 'translateX(0)', opacity: '1' }, // Slide in
          '90%': { transform: 'translateX(0)', opacity: '1' }, // Stay in view
          '100%': { transform: 'translateX(-100%)', opacity: '0' }, // Slide out
        },
        slideInFromRight: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '10%': { transform: 'translateX(0)', opacity: '1' }, // Slide in
          '90%': { transform: 'translateX(0)', opacity: '1' }, // Stay in view
          '100%': { transform: 'translateX(100%)', opacity: '0' }, // Slide out
        },
      },
    },
  },
  plugins: [],
}
