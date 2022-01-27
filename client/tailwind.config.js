module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        sans: 'Open Sans, sans-serif',
        display: 'Comfortaa, cursive',
      },
      animation: {
        'gradient-y': 'gradient-y 5s ease infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center center',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
