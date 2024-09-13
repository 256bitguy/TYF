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
        'custom-purple-medium': '#2A064A'
      },
    },
  },
  plugins: [
    // require('@tailwindcss/forms'),
  ],
}

