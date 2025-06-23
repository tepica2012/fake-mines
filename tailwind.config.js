/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        stakeBg: '#131517',
        controlBg: '#1f2225',
        tileHover: '#2c2f32',
        gemBg: '#10b981',
        redBg: '#991b1b',
        greenBg: '#10b981',
        cashOut: '#3b82f6',
        reset: '#ef4444',
        resetMoney: '#facc15',
      },
    },
  },
  plugins: [],
};
