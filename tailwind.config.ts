import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#08080F',
          card: '#0F0F1A',
        },
        brand: {
          purple: '#7C3AED',
          'purple-light': '#A855F7',
          cyan: '#06B6D4',
        },
        success: '#10B981',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'float': 'float 4s ease-in-out infinite',
        'gradient-shift': 'gradientShift 6s ease infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      boxShadow: {
        'glow-purple': '0 0 40px rgba(124, 58, 237, 0.3)',
        'glow-cyan': '0 0 40px rgba(6, 182, 212, 0.3)',
        'glow-brand': '0 0 60px rgba(124, 58, 237, 0.25), 0 0 120px rgba(6, 182, 212, 0.1)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(124, 58, 237, 0.25)',
      },
    },
  },
  plugins: [],
}
export default config
