/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0F172A', // 深藍色底
        secondary: '#64748B', 
        gold: '#D9B061', // 提升亮度後的亮香檳金 (原本是 #C5A059)
        accent: '#D9B061',
        medical: '#E2F1F3',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        serif: ['Noto Serif TC', 'Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
