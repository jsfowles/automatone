module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1440px',
    },
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
      display: ['Raleway Dots', 'serif'],
    },
    colors: {
      white: '#FDFFF8',
      black: '#2C363F',
    },
    textShadow: {
      text: '0px -2px 10px #FDFFF8',
    },
    fontSize: { display: ['8vw'], body: ['50px'], h1: ['5vw'] },
  },
};
