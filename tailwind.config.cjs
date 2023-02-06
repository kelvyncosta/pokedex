/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      colors: {
        yellow: {
          100: '#fff5cc',
          200: '#ffeb99',
          300: '#ffe066',
          400: '#ffd633',
          500: '#ffcc00',
          600: '#cca300',
          700: '#997a00',
          800: '#665200',
          900: '#332900',
        },
        blue: {
          100: '#cce0f0',
          200: '#99c1e0',
          300: '#66a3d1',
          400: '#3384c1',
          500: '#0065b2',
          600: '#00518e',
          700: '#003d6b',
          800: '#002847',
          900: '#001424',
        },
      },
      boxShadow: {
        outerCircle:
          '6px 6px 10px -1px rgba(0, 0, 0, 0.15), -6px -6px 10px -1px rgba(255, 255, 255, 0.7)',
        innerCircle:
          'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(0, 0, 0, 0.15), 0px 12px 10px -10px rgba(0, 0, 0, 0.05)',
        chain: '0 0 0.5rem 0 rgb(0 0 0 / 40%)',
        pokemon: '0 0 1rem 0 rgb(0 0 0 / 20%)',
      },
      fontSize: {
        stat: [
          '2rem',
          {
            lineHeight: '2rem',
          },
        ],
      },
    },
  },
  plugins: [],
};
