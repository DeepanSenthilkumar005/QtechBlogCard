/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'csbrown': '#795548',
        'csyellow': '#FFAB02',
      },

    },
  },
  plugins: [],
}

