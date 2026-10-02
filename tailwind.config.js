/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: '#08090A',
          950: '#050506',
          900: '#0A0B0D',
          800: '#121316',
          700: '#1B1D21',
          600: '#26282D',
          500: '#3A3D44',
        },
        volt: {
          DEFAULT: '#FF7A2F',
          50: '#FFF1E8',
          100: '#FFE0CC',
          300: '#FFAB77',
          400: '#FF904F',
          500: '#FF7A2F',
          600: '#E05E18',
          700: '#B84808',
          900: '#5C2201',
        },
      },
      fontFamily: {
        display: ['"Rajdhani"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'hazard-stripes':
          'repeating-linear-gradient(135deg, #FF7A2F 0px, #FF7A2F 22px, #0A0A0A 22px, #0A0A0A 44px)',
        'grid-lines':
          'linear-gradient(rgba(255,122,47,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,122,47,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '48px 48px',
      },
      boxShadow: {
        volt: '0 0 40px -5px rgba(255,122,47,0.45)',
        'volt-sm': '0 0 20px -4px rgba(255,122,47,0.5)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        scan: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '0 48px' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4 },
          '50%': { opacity: 1 },
        },
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
        scan: 'scan 3s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
