/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: '#15100f',
        oak: '#3a211d',
        ember: '#8d2418',
        cream: '#f3ece4',
        sand: '#d7c2b0',
        night: '#100b0a',
        slateglass: '#15100fcc',
      },
      boxShadow: {
        soft: '0 24px 80px -24px rgba(53, 26, 22, 0.24)',
        card: '0 18px 40px -22px rgba(26, 16, 15, 0.22)',
        glow: '0 28px 90px -42px rgba(141, 36, 24, 0.42)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)',
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
      },
    },
  },
  plugins: [],
};
