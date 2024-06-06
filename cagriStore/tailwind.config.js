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
        textColorLightGray: '#737373',
        textColorDarkGray: '#252B42',
        footerLightGray: '#FAFAFA',
        buttonBgColorGreem: '#2DC071',
        sliderBgColorGreen: '#23856D',
        textColorH2: '#BDBDBD',
        aboutRed: '#E74040',
        buttonFullBlue: '#23A6F0',
        facebookIconBlue: '#335BF5',
        instagramIconRed: '#E51F5A',
        twitterIconBlue: '#21A6DF',
        lightBluePricing: '#8EC2F2',
        linkedinIconBlue: '#0A66C2',
        aboutUsLastHeaderColour: '#2A7CC7',
        saveBColor: '#B2E3FF'




      },
      boxShadow: {
        'product-description-image-shadow': '15px 15px 25px -1px rgba(0,0,0,0.75);',

      }
    },
  },
  plugins: [],
}