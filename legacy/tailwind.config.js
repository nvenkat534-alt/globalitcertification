/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: '#1e40af',
        secondary: '#0ea5e9',
        whatsapp: '#25D366'
      }
    },
  },
  plugins: [],
}
