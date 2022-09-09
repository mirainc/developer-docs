const defaultTheme = require('tailwindcss/defaultTheme');

const colors = {};

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}', './content/**/*.{md,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Gellix', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: {
          850: '#18202F',
          950: '#000a14',
        },
        sky: {
          // Generated from https://www.tailwindshades.com/#color=220.09478672985782%2C99.06103286384977%2C41.76470588235294&step-up=10&step-down=7&hue-shift=0&name=science-blue&base-stop=6&overrides=e30%3D
          DEFAULT: '#0147D4',
          50: '#EFF4FF',
          100: '#D5E3FF',
          200: '#A2C1FF',
          300: '#709FFE',
          400: '#3D7DFE',
          500: '#0A5BFE',
          600: '#0147D4',
          700: '#013BB0',
          800: '#012F8D',
          900: '#002369',
        },
        'logo-bg': {
          DEFAULT: '#000',
          dark: '#fff',
        },
      },
      screens: {
        '1.5xl': '1440px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
