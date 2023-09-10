/** @type {import('tailwindcss').Config}*/
const config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: { fontFamily: { sans: ['Nohemi'] } }
  },

  plugins: [require('daisyui')],

  daisyui: {
    themes: [
      'luxury',

      {
        luxury: {
          ...require('daisyui/src/theming/themes')['[data-theme=luxury]'],
          primary: '#FFB752'
        }
      }
    ]
  }
};

module.exports = config;
