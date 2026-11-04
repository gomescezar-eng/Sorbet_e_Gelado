/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  present: [
    require("nativewind/preset"),
  ],

  theme: {
    extend: {},
  },
  
  plugins: [],
};

