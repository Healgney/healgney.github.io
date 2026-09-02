import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#06080f',
        elev: '#0d1220',
        line: '#1b2233',
        ink: '#e6e8ee',
        mute: '#8a93a6',
        accent: {
          cyan: '#22d3ee',
          violet: '#8b5cf6',
          amber: '#f5b54a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(34,211,238,.18)',
        'glow-violet': '0 0 60px rgba(139,92,246,.22)',
      },
      backgroundImage: {
        'grid-line':
          'linear-gradient(to right, rgba(255,255,255,.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.04) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at 50% 0%, rgba(34,211,238,.10), transparent 60%)',
      },
      animation: {
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        blink: 'blink 1s steps(2, start) infinite',
      },
      keyframes: {
        blink: { '0%,100%': { opacity: '1' }, '50%': { opacity: '0' } },
      },
    },
  },
  plugins: [],
};

export default config;
