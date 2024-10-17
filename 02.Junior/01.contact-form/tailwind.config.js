/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        grey900: '#2A4144',
        grey500: '#86A2A5',
        green600: '#0C7D69',
        green200: '#E0F1E8',
        redError: '#D73C3C',
      },
      fontSize: {
        heading: [
          '32px',
          {
            lineHeight: '100%', // Line height
            fontWeight: 'bold', // Font weight
            letterSpacing: '-1px', // Letter spacing
          },
        ],
        'body-md-bold': [
          '18px',
          { fontWeight: 'bold', lineHeight: '150%', letterSpacing: '0px' },
        ],
        'body-md-regular': [
          '18px',
          { fontWeight: '400', lineHeight: '150%', letterSpacing: '0px' },
        ],
        'body-sm': [
          '16px',
          { fontWeight: '400', lineHeight: '150%', letterSpacing: '0px' },
        ],
      },
      backgroundImage: {
        'icon-checkbox': "url('/src/assets/images/icon-checkbox-check.svg')",
        'icon-radio-selected':
          "url('/src/assets/images/icon-radio-selected.svg')",
      },
    },
  },
  plugins: [],
};
