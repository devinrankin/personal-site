/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "primary": "var(--text-primary)",
        "secondary": "var(--text-secondary)",
        "primary-bg": "var(--bg-primary)",
        "secondary-bg": "var(--bg-secondary)",
      },
      transitionDuration: {
        "600": "600ms"
      }
    },
  },
  plugins: [],
}
