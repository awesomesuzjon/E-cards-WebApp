// tailwind.config.cjs

module.exports = {
  // add this section
  purge: [
    './src/**/*.html',
    './src/**/*.svelte'
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'customColorPink' : '#F2E5E7',
        'customColorGray' : '#1F2937',
        'customHamroPatroColor' : '#b71c1c',

      },
      boxShadow :{
        'customBoxShadow' : '0 5px 10px rgba(154,160,185,.05), 0 15px 40px rgba(166,173,201,.2);',
        'darkBoxShadowTop' : '0px 1px 2px 0px rgba(0,255,255,0.7)',
        'darkBoxShadowRight':'1px 2px 4px 0px rgba(0,255,255,0.7)',
        'darkBoxShadowBottom':'2px 4px 8px 0px rgba(0,255,255,0.7)',
        'darkBoxShadowLeft':'2px 4px 16px 0px rgba(0,255,255,0.7)',
        'customHoverBoxShadow':" 10px 10px 5px 0px rgba(231,221,221,0.75)"
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('daisyui'),    require('flowbite/plugin')
  ]
}
