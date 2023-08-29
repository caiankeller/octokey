/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        mono: 'IBM Plex Mono, monospace',
        title: 'Big Shoulders Display, cursive'
      }
    }
  },
  plugins: [require('@pyncz/tailwind-mask-image')]
}
