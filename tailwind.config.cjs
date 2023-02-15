/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  darkMode: 'class',
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
        chain: '0 0 0.5rem 0 rgb(0 0 0 / 40%)',
        pokemon: '0 0 1rem 0 rgb(0 0 0 / 20%)',
        type: '0 0 1.25rem 0 var(--card-color)',
      },
      fontSize: {
        stat: [
          '2rem',
          {
            lineHeight: '2rem',
          },
        ],
      },
      backgroundImage: {
        pattern: `linear-gradient(
          0deg,
          rgba(255, 255, 255, 0.85),
          rgba(255, 255, 255, 0.85)
        ),
        url('/background.jpg')`,
      },
      backgroundColor: {
        type: 'var(--card-color) !important',
      },
    },
  },
  plugins: [],
};
