/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary':'var(--primary)',
        'secondary':'var(--secondary)',
        'primarylight': 'var(--primarylight)',
        'pink': 'var(--pink)',
        'purple': 'var(--purple)',
        'green': 'var(--green)',
        'orange': 'var(--orange)',
      },
    },
  },
  plugins: [],
}
