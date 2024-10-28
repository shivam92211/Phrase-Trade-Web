/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: '375px', // Custom breakpoint for 375px width
      },
      spacing: {
        horizontalSm: '10px',
      },
      colors: {
        brand: '#3C32A3',
        lightBrand: '#DBE7FF',
        light2Brand: '#a8aede',
        light3Brand: '#8086cc',
        brand2: '#825ef6',
        lightBrand2: '#e3e1ff',
        light2Brand2: '#c8c2ff',
        light3Brand2: '#afa3fe',
        purpleBrand: '#ecf2fe',
        lightblue: '#edf2fe',
        white: '#fff',
        brandGrey: "#f6f7fc",
        brandAltBlue: "#3772FF",
        '-1': '#242b2e',
        '0': '#2e2b2b',
        '1': 'black',
        '2': '#8f95a4',
        '3': '#c8cad0',
        '4': '#e6e8f0',
        '1b': '#fff',
        '2b': '#F6F7FC',
        '3b': '#f3f3f3',
        grey2: '#eaebf0',
        grey1: "#f6f7fc",
      },
      fontSize: {
        f9: '9px',
        f10: '10px',
        f12: '12px',
        f14: '14px',
        md: '16px',
        lg: '22px',
      },
      keyframes: {
        fadeToWhite: {
          '0%': { backgroundColor: '#c8c2ff' },
          '100%': { backgroundColor: 'white' },
        },
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(15px)' },
          '70%': { opacity: 1, transform: 'translateY(-4px)' },
          '90%': { opacity: 1, transform: 'translateY(1px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        upDown: {
          '0%': { transform: 'translateY(0)' },
          '30%': { transform: 'translateY(4px)' },
          '80%': { transform: 'translateY(-8px)' },
          '100%': { transform: 'translateY(0)' },
        },
        float: {
          '0%': { transform: 'translate(0, 0)' },
          '19%': { transform: 'translate(4px, 2px)' },
          '39%': { transform: 'translate(-2px, 2px)' },
          '62%': { transform: 'translate(-3px, -3px)' },
          '84%': { transform: 'translate(2px, -3px)' },
          '100%': { transform: 'translate(0, 0)' },
        },
        wave1: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-2px)' },
        },
        wave2: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
        },
        wave3: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-1px)' },
        },
        wave4: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-3px)' },
        },
        moveUp: {
          '0%': { opacity: 0, transform: 'translateY(10px)' },
          '10%': { opacity: 1, transform: 'translateY(0)' },
          '85%': { opacity: 1, transform: 'translateY(0)' },
          '100%': { opacity: 0, transform: 'translateY(-10px)' }
        },
        dropIn: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '10%, 40%, 70%': { transform: 'translateX(-5px)' },
          '25%, 55%, 85%': { transform: 'translateX(5px)' },
        },
      },
      animation: {
        fade: 'fadeToWhite 2s forwards', // Adjust the duration as needed
        "fade-up": "fadeUp 0.3s ease-in-out",
        "up-down": "upDown 0.4s ease-in-out",
        float: 'float 9s ease-in-out infinite', // Adjust duration as needed
        wave1: 'wave1 2s ease-in-out infinite',
        wave2: 'wave2 2.5s ease-in-out infinite',
        wave3: 'wave3 3s ease-in-out infinite',
        wave4: 'wave4 2.8s ease-in-out infinite',
        "move-up": 'moveUp 3s ease-in-out forwards',
        "drop-in": 'dropIn 0.5s ease-in-out forwards',
        shake: 'shake 0.5s ease-in-out',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')], // Include typography plugin if needed
}
