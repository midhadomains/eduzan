/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        custom: '2.4px 2.4px 3.2px rgba(190, 78, 30, 0.15)',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'bgfrm': "url('/Vector.png')",
        'featuresbg':"url('/bghomefeatures.svg')",
        "contactbgimage": "url('/Vector 10.svg')",
        "3500bg":"url('https://midha-images.s3.ap-south-1.amazonaws.com/Midhafin/Backgrounds/3500background.svg')",
      },
      textUnderlineOffset: {
        3: '3px',
      }
    },
    screens: {
      'xs': '500px',
      // => @media (min-width: 320px) { ... }
      'sm': '700px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'mg': '900px',
      // => @media (min-width: 900px) { ... }
      'mh' : '850px',

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }
      'lx': '1052px',

      'xl': '1370px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      'hs' : '1140px',
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // ...
  ],
}
