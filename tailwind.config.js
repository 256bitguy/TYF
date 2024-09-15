/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple-light': '#580b9a',
        'custom-purple-dark': '#360561',
        'custom-purple-medium': '#2A064A',
        'custom-blue-dark':'#280348'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

