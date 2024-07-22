/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{jsx,tsx, js, ts}",
  ],
  theme: {
    extend: {
      keyframes: {
        blink: {
          '50%': { opacity: 0 },
        },
      },
      animation: {
        blink: 'blink 0.7s steps(2) infinite',
      },
    },
  },
  plugins: [],
}

