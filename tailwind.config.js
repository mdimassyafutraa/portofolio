/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        hitamBg: '#020617',
        hitamPages: '#0f172a',
        biru: '#00b8ff',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
};
