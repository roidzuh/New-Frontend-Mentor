/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontSize: {
        'heading-xl': [
          '56px',
          {
            lineHeight: '56px',
            fontWeight: '800',
            letterSpacing: '0px',
          },
        ],
        'heading-l': [
          '40px',
          {
            lineHeight: '40px',
            fontWeight: '700',
            letterSpacing: '0px',
          },
        ],
        'heading-m': [
          '32px',
          {
            lineHeight: '32px',
            fontWeight: '700',
            letterSpacing: '0px',
          },
        ],
        'heading-s': [
          '20px',
          {
            lineHeight: '24px',
            fontWeight: '800',
            letterSpacing: '0px',
          },
        ],
        'heading-xs': [
          '18px',
          {
            lineHeight: '24px',
            fontWeight: '800',
            letterSpacing: '0px',
          },
        ],
        body: [
          '15px',
          {
            lineHeight: '26px',
            fontWeight: '400',
            letterSpacing: '0px',
          },
        ],
      },
      colors: {
        'almost-white': '#FFFDFA',
        'dark-space-blue': '#00001A',
        gunmetal: '#5E607A',
        'Light-Vermillion': '#F15D51',
        silver: '#C5C6CE',
        'yellow-orange': '#E9AA52',
      },
    },
  },
  plugins: [],
};
