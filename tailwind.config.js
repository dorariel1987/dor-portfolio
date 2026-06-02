/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        bg: {
          base: '#05060A',
          deep: '#08090F',
          panel: '#0D0F18',
          card: '#11141F',
          border: '#1B1F2E',
        },
        ink: {
          DEFAULT: '#E6E9F2',
          dim: '#9AA2B8',
          mute: '#5A607A',
        },
        neon: {
          cyan: '#00F0FF',
          magenta: '#FF2BD6',
          violet: '#8B5CF6',
          lime: '#9BFF4D',
          amber: '#FFB020',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
        hebrew: ['"Heebo"', '"Rubik"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-cyan': '0 0 0 1px rgba(0,240,255,0.3), 0 0 24px rgba(0,240,255,0.25), 0 0 60px rgba(0,240,255,0.15)',
        'glow-magenta': '0 0 0 1px rgba(255,43,214,0.3), 0 0 24px rgba(255,43,214,0.25), 0 0 60px rgba(255,43,214,0.15)',
        'glow-soft': '0 10px 40px -10px rgba(0,240,255,0.25), 0 30px 80px -20px rgba(255,43,214,0.18)',
        'card': '0 20px 60px -20px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)',
        'card-hover': '0 30px 80px -20px rgba(0,240,255,0.35), 0 0 0 1px rgba(0,240,255,0.4)',
      },
      screens: {
        xs: '480px',
      },
      backgroundImage: {
        'grid-neon':
          'linear-gradient(rgba(0,240,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,240,255,0.06) 1px, transparent 1px)',
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-64': '64px 64px',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'pulse-glow': 'pulse-glow 3s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'scan-line': 'scan-line 8s linear infinite',
        'marquee': 'marquee 40s linear infinite',
      },
    },
  },
  plugins: [],
};
