/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary": "var(--primary)",
        "secondary": "var(--secondary)",
        "typography": "var(--typography)",
        "bold-typography": "var(--bold-typography)"
      },
      transitionDuration: {
        "600": "600ms"
      }
    },
    borderOpacity: ({theme}) => theme('opacity')
  },
  plugins: [],
}
