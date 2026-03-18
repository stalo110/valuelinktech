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
        ink: '#0a1929',
        steel: '#1e3a5f',
        mist: '#e2e8f0',
        teal: '#00bcd4',
        gold: '#ffb74d',
        night: '#06111d',
        slateglass: '#0f172acc',
      },
      boxShadow: {
        soft: '0 24px 80px -24px rgba(10, 25, 41, 0.22)',
        card: '0 18px 40px -22px rgba(15, 23, 42, 0.24)',
        glow: '0 30px 90px -40px rgba(0, 188, 212, 0.65)',
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
