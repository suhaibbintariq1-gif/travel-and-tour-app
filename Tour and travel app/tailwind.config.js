/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            darkbackground: '#0B0B0B',
            brightcolor: '#F5F5F5',
    },
  },
},
  plugins: [],
};
