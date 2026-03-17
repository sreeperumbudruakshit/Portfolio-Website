/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#05060b',
          900: '#070a12',
          850: '#0a0e1a',
          800: '#0c1120',
          700: '#111a2e',
          600: '#162342',
        },
      },
      boxShadow: {
        glow:
          '0 0 0 1px rgba(255,255,255,0.06), 0 0 24px rgba(139,92,246,0.18), 0 0 64px rgba(34,211,238,0.10)',
        soft: '0 20px 70px rgba(0,0,0,0.45)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(800px circle at var(--mx,50%) var(--my,20%), rgba(139,92,246,0.18), transparent 55%)',
        'grain':
          'url("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27240%27 height=%27240%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.8%27 numOctaves=%273%27 stitchTiles=%27stitch%27/%3E%3C/filter%3E%3Crect width=%27240%27 height=%27240%27 filter=%27url(%23n)%27 opacity=%270.23%27/%3E%3C/svg%3E")',
      },
      keyframes: {
        floaty: {
          '0%, 100%': { transform: 'translate3d(0,0,0)' },
          '50%': { transform: 'translate3d(0,-10px,0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
      fontFamily: {
        sans: [
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Inter',
          'Roboto',
          'Helvetica',
          'Arial',
          'Noto Sans',
          'sans-serif',
        ],
        mono: ['ui-monospace', 'SFMono-Regular', 'Consolas', 'Monaco', 'monospace'],
      },
    },
  },
  plugins: [],
}

