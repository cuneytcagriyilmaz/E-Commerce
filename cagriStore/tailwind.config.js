/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mainBackgroundWhite: '#FAFAFA',
        navbarLigthBlue: '#23A6F0',
        textColorLightGray: '#737373',
        textColorDarkGray: '#252B42',
        buttonBgColorGreem: '#2DC071',
        sliderBgColorGreen: '#23856D',
        textColorH2: '#BDBDBD',
        buttonFullBlue: '#23A6F0',
        footerLightGray: '#FAFAFA',



      },
      boxShadow: {
        'product-description-image-shadow': '15px 15px 25px -1px rgba(0,0,0,0.75);',

      }
    },
  },
  plugins: [],
}