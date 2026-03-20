/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Manrope', 'ui-sans-serif', 'system-ui', 'sans-serif'],
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
        soft: '0 40px 120px -54px rgba(53, 26, 22, 0.28)',
        card: '0 24px 60px -32px rgba(26, 16, 15, 0.22)',
        glow: '0 24px 70px -34px rgba(141, 36, 24, 0.34)',
      },
      backgroundImage: {
        'hero-grid':
          'linear-gradient(rgba(58,33,29,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(58,33,29,0.06) 1px, transparent 1px)',
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
