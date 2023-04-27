/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    colors: {
      'malachite-green': '#1B683F',
      'malachite-light': '#2A7A5D',
      'malachite-dark': '#0F3B23',
      'white': '#fff',
      'malachite-white': '#F4F5F4',
      'success': '#3B9C4A',
      'error': '#C71F1F',
      'warning': '#d99a22',
    },
    fontSize: {
      'xxs': '.625rem',
      'xs': '.75rem',
      'sm': '0.9rem',
      'base': '1rem',
      'xl': '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    plugins: [],
  }
}