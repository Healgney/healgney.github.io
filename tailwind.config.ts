import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        base: '#ffffff',
        surface: '#f8fafc',
        card: '#ffffff',
        line: '#e2e8f0',
        'line-dark': '#cbd5e1',
        ink: {
          DEFAULT: '#0f172a',
          secondary: '#334155',
          muted: '#64748b',
          faint: '#94a3b8',
        },
        accent: {
          cyan: '#06b6d4',
          emerald: '#10b981',
          blue: '#2563eb',
          violet: '#7c3aed',
          amber: '#f59e0b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.05)',
        'card-hover': '0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
        'glow-cyan': '0 0 30px rgba(6, 182, 212, 0.18)',
        'glow-emerald': '0 0 30px rgba(16, 185, 129, 0.18)',
      },
      backgroundImage: {
        'grid-pattern':
          'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.06) 1px, transparent 0)',
        'grid-line':
          'linear-gradient(to right, rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.04) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;
