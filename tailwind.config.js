const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-brand)', ...fontFamily.sans],
      },
      fontSize: {
        'fluid-lg': 'clamp(1rem, 10vw, 3rem)',
        'fluid-xl': 'clamp(2rem, 10vw, 5rem)',
      },
    },
  },
  plugins: [],
};
