/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'midnight-slate': '#1D2026',
        'stormy-gray': '#69707D',
        'amber-blaze': '#FF7E1B',
        'peach-glow': '#FFAB6A',
        'frosted-sky': '#E4E9F2',
        'cool-mist': '#C3CAD9',
        'icy-whisper': '#F6F8FD',
      },
    },
  },
  plugins: [],
};
