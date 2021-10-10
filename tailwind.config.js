module.exports = {
  purge: ['./index.html', './src/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    backgroundColor: (theme) => ({
      ...theme('colors'),
      blueGray: '#141C2F',
      blueGrayLight: '#1F2A48',
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
