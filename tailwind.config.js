/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
      backgroundImage: {
        'bgfrm': "url('/Vector.png')",
        'featuresbg':"url('/bghomefeatures.svg')",
        "contactbgimage": "url('/Vector 10.svg')",
      },
    },
  },
  plugins: [],
}
