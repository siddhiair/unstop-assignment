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
        'lightGray': 'var(--lightGray)'
      },
    },
    screens: {
      'sm': '600px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1440px',
    }
  },
  plugins: [],
}
