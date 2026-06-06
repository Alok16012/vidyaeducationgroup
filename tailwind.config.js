/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F172A',
        slateblue: '#1E3A8A',
        crimson: '#DC2626',
        softgrey: '#F8FAFC',
        brand: {
          50: '#eef2ff',
          100: '#e0e7ff',
          200: '#c7d2fe',
          300: '#a5b4fc',
          400: '#818cf8',
          500: '#1E3A8A',
          600: '#1b327a',
          700: '#172a66',
          800: '#0F172A',
          900: '#0b1120',
        },
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['Sora', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        premium: '0 20px 45px -20px rgba(15, 23, 42, 0.35)',
        card: '0 10px 30px -12px rgba(15, 23, 42, 0.22)',
        glow: '0 0 0 1px rgba(30,58,138,0.08), 0 18px 40px -18px rgba(30,58,138,0.45)',
      },
      backgroundImage: {
        'hero-grid':
          'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.12) 1px, transparent 0)',
        'navy-gradient': 'linear-gradient(135deg, #0F172A 0%, #1E3A8A 100%)',
        'crimson-gradient': 'linear-gradient(135deg, #DC2626 0%, #b91c1c 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
