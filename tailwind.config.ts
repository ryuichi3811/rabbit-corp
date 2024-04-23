import type { Config } from 'tailwindcss';

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      animation: {
        'accordion-down': 'accordion-down 1s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'text-shadow-drop-br': 'text-shadow-drop-br 1s ease both',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'text-shadow-drop-br': {
          '0%': {
            'text-shadow': '0 0 0 transparent',
          },
          to: {
            'text-shadow':
              '1px 1px 1px rgba(225, 225, 225, .9),1px 2px 1px rgba(225, 225, 225, .9), 2px 13px 12px rgba(190, 170, 0, .6)',
          },
        },
      },
      boxShadowColor: {
        default: 'rgba(0, 0, 0, 0.25)',
        green: 'rgba(0, 255, 0, 0.9)',
        blue: 'rgba(0, 0, 255, 0.25)',
        red: 'rgba(255, 0, 0, 0.25)',
      },
      boxShadow: {
        'reve-hover-light':
          '0 0 20px 12px rgba(150, 180, 150, 0.15), inset 0 0 28px 16px rgba(150, 180, 150, 0.14)',
        'reve-header':
          'inset 0 0 30px 0 rgba(0, 0, 0, 0.85), 0 0 20px 0 rgba(80, 80, 0, 0.7)',
      },
      colors: {
        clearness: 'rgba(0, 0, 0, 0)',
        'norika-color': '#928484',
        'reve-color': '#e4d8bb',
        'reve-main': '#FFFDEF',
        'reve-sub': '#1c202a',
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;
