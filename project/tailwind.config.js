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
      },
      fontFamily: {
        'mont': ["Montserrat", "sans-serif"]
    }
  },
  },
  plugins: [],
}

