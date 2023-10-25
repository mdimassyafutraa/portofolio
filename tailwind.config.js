/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    fontFamily: {
      poppins: ['poppins'],
    },
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        hitamBg: '#020617',
        hitamPages: '#0f172a',
        biru: '#0369a1',
      },
      screens: {
        '2xl': '1320px',
      },
      boxShadow: {
        lg: '0 10px 15px -3px rgb(255 255 255 / 0.1), 0 4px 6px -4px rgb(255 255 255 / 0.1);',
      },
    },
  },
  plugins: [],
};
