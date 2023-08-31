/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["var(--font-Raleway)", "Arial", "Helvetica", "sans-serif"],
      },
      colors: {
        brand: "#ffa600",
      },
    },
  },
  plugins: [],
}
