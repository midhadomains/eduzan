/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'bgfrm': "url('/Vector.png')",
        'featuresbg':"url('/bghomefeatures.svg')",
      },
    },
  },
  plugins: [],
}
