import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // HyBikes static palette
        primary: '#121212',
        secondary: '#F9F9F7',
        accent: '#FF4F00',
        muted: '#6B6B6B',
        // Dynamic brand color system (CSS variable driven)
        brand: {
          DEFAULT: 'hsl(var(--color-brand-primary))',
          hover: 'hsl(var(--color-brand-hover))',
          active: 'hsl(var(--color-brand-active))',
          light: 'hsl(var(--color-brand-light))',
          dark: 'hsl(var(--color-brand-dark))',
          // Opacity variants for backgrounds and overlays
          50: 'hsl(var(--color-brand-primary) / 0.05)',
          100: 'hsl(var(--color-brand-primary) / 0.10)',
          200: 'hsl(var(--color-brand-primary) / 0.20)',
        },
      },
      boxShadow: {
        // Modern soft shadows with subtle opacity
        soft: '0 2px 8px 0 rgba(0, 0, 0, 0.04)',
        'soft-md': '0 4px 12px 0 rgba(0, 0, 0, 0.05)',
        'soft-lg': '0 8px 24px 0 rgba(0, 0, 0, 0.06)',
        'soft-xl': '0 16px 48px 0 rgba(0, 0, 0, 0.08)',
        glow: '0 0 24px -4px hsl(var(--color-brand-primary) / 0.3)',
      },
      fontSize: {
        // Display typography for hero sections
        'display-xl': [
          '4.5rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'display-lg': [
          '3.75rem',
          { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '800' },
        ],
        'display-md': [
          '3rem',
          { lineHeight: '1.15', letterSpacing: '-0.01em', fontWeight: '800' },
        ],
      },
      spacing: {
        88: '22rem',
        100: '25rem',
        112: '28rem',
        128: '32rem',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'slide-right': 'slideRight 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'scale-in-subtle': 'scaleInSubtle 0.6s ease-out',
        shimmer: 'shimmer 2s infinite',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-down': 'fadeInDown 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideRight: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleInSubtle: {
          '0%': { opacity: '0', transform: 'scale(0.98)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      transitionDuration: {
        250: '250ms',
      },
      fontFamily: {
        display: ['var(--font-display)', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
