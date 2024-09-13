/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: { darkPurple: '#301534', palePurple: '#8B6990', pink: '#AD28EB' },
      fontSize: {
        displayMobile: '32px',
        titleMobile: '16px',
        bodyMobile: ['14px', '150%'],
        display: '56px',
        title: '18px',
        body: ['16px', '150%'],
      },
    },
  },
  plugins: [],
};
