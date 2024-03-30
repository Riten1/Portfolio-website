/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      backgroundColor: {
        'f5f0f0': '#f5f0f0',
        'conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)' : `conic-gradient(#7d2ae8 3.6deg, #ededed 0deg)`
      },
      fontFamily: {
        'mont': ["Montserrat", "sans-serif"]
    }
  },
  },
  plugins: [],
}

