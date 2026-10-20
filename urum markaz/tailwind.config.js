/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0f2747',
          50: '#e8edf4',
          100: '#cdd8e6',
          200: '#9bb0cc',
          300: '#6988b3',
          400: '#376099',
          500: '#1a3a66',
          600: '#0f2747',
          700: '#0c1f3a',
          800: '#091729',
          900: '#060f1c',
        },
        emerald: {
          DEFAULT: '#0e9f6e',
          50: '#e6f7f1',
          100: '#c3eddf',
          200: '#88dbbf',
          300: '#4dc99f',
          400: '#16a34a',
          500: '#0e9f6e',
          600: '#0b7d56',
          700: '#085b3f',
          800: '#053a28',
          900: '#021c14',
        },
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
