/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:   '#1b4fb3',
        secondary: '#0a1628',
        tertiary:  '#00a3e0',
        background:'#ffffff',
        surface:   '#f8fafc',
        'surface-variant': '#e2e8f0',
        outline:   '#64748b',
        'on-primary': '#ffffff',
        'on-background': '#0a1628',
        'on-surface': '#0a1628',
        cyan: '#00b4d8',
      },
      fontFamily: {
        headline: ['"Barlow Condensed"', 'sans-serif'],
        body:     ['Barlow', 'sans-serif'],
        label:    ['"Barlow Condensed"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #1b4fb3 0%, #00b4d8 100%)',
      },
      letterSpacing: {
        widest: '.25em',
        wider:  '.12em',
        brand:  '.3em',
      },
      keyframes: {
        fadeIn:        { from: { opacity:'0', transform:'translateY(10px)' }, to: { opacity:'1', transform:'translateY(0)' } },
        skeletonPulse: { '0%': { backgroundPosition:'200% 0' }, '100%': { backgroundPosition:'-200% 0' } },
        fadeUp:        { from: { opacity:'0', transform:'translateY(32px)' }, to: { opacity:'1', transform:'translateY(0)' } },
      },
      animation: {
        'fade-in':       'fadeIn 0.2s ease-out',
        'skeleton':      'skeletonPulse 1.5s infinite',
        'fade-up':       'fadeUp 0.7s ease-out forwards',
      },
    },
  },
  plugins: [],
};
