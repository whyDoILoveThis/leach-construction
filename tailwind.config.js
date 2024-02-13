/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-79': '#000000cc',
        'black-70': '#000000b3',
        'bg-primary': '#1e1e1e',
        'btn-primary': '#FFD600',
        'bg-box': '#00000082'
      },
      screens: {
        'xxs': '320px',
        'xs': '545px',
        'md': '800px',
        
      
      },
    },
  },
  plugins: [],
}

