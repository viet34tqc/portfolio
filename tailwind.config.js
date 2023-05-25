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
        text: 'var(--c-text)',
        'text-secondary': 'var(--c-text-secondary)',
        link: 'var(--c-link)',
        blue: 'var(--c-blue)',
        border: 'var(--c-border)',
      },
      container: {
        center: true,
        padding: '2rem',
        screens: {
          xl: '1100px',
        },
      },
    },
  },
  plugins: [],
};
