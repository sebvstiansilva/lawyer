/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // From DESIGN.md - Lex Chilean Juris palette
        surface: {
          DEFAULT: '#f9f9f9',
          dim: '#dadada',
          bright: '#f9f9f9',
          'container-lowest': '#ffffff',
          'container-low': '#f3f3f3',
          'container': '#eeeeee',
          'container-high': '#e8e8e8',
          'container-highest': '#e2e2e2',
        },
        'on-surface': {
          DEFAULT: '#1a1c1c',
          variant: '#45474d',
        },
        'inverse-surface': '#2f3131',
        'inverse-on-surface': '#f1f1f1',
        outline: '#75777d',
        'outline-variant': '#c5c6cd',
        'surface-tint': '#545e76',
        primary: {
          DEFAULT: '#051125',
          container: '#1b263b',
          'on-container': '#828da7',
          fixed: '#d7e2ff',
          'fixed-dim': '#bbc6e2',
          'on-fixed': '#101b30',
          'on-fixed-variant': '#3c475d',
        },
        secondary: {
          DEFAULT: '#775a19',
          container: '#fed488',
          'on-container': '#785a1a',
          fixed: '#ffdea5',
          'fixed-dim': '#e9c176',
          'on-fixed': '#261900',
          'on-fixed-variant': '#5d4201',
        },
        tertiary: {
          DEFAULT: '#001224',
          container: '#0a2742',
          'on-container': '#768fae',
          fixed: '#d1e4ff',
          'fixed-dim': '#afc9ea',
          'on-fixed': '#001d36',
          'on-fixed-variant': '#2f4865',
        },
        error: {
          DEFAULT: '#ba1a1a',
          container: '#ffdad6',
          'on-container': '#93000a',
        },
        background: '#f9f9f9',
        'on-background': '#1a1c1c',
        // Aliases for convenience
        navy: '#051125',
        gold: '#775a19',
        'off-white': '#f9f9f9',
      },
      fontFamily: {
        // From DESIGN.md - EB Garamond for headlines, Inter for body
        display: ['EB Garamond', 'Georgia', 'serif'],
        headline: ['EB Garamond', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        // From DESIGN.md typography scale
        'display-lg': ['48px', { lineHeight: '56px', letterSpacing: '-0.01em', fontWeight: '600' }],
        'display-lg-mobile': ['36px', { lineHeight: '42px', fontWeight: '600' }],
        'headline-lg': ['32px', { lineHeight: '40px', fontWeight: '500' }],
        'headline-md': ['24px', { lineHeight: '32px', fontWeight: '500' }],
        'body-lg': ['18px', { lineHeight: '28px', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'label-lg': ['14px', { lineHeight: '20px', letterSpacing: '0.05em', fontWeight: '600' }],
        'label-sm': ['12px', { lineHeight: '16px', fontWeight: '500' }],
      },
      spacing: {
        base: '8px',
        container: '1200px',
        gutter: '24px',
        'margin-mobile': '16px',
        'margin-desktop': '64px',
      },
      borderRadius: {
        'sm': '0.125rem',
        DEFAULT: '0.25rem',
        'md': '0.375rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        'full': '9999px',
      },
      maxWidth: {
        container: '1200px',
      },
      boxShadow: {
        // Ambient shadows for modals/dropdowns only
        'ambient': '0 20px 15px -5px rgba(5, 17, 37, 0.15)',
        // Card hover shadow
        'card-hover': '0 25px 50px -12px rgba(5, 17, 37, 0.25)',
      },
      animation: {
        // Page load animations
        'fade-in': 'fade-in 400ms ease-out forwards',
        'slide-up': 'slide-up 400ms ease-out forwards',
        'slide-up-delay-1': 'slide-up 400ms ease-out 100ms forwards',
        'slide-up-delay-2': 'slide-up 400ms ease-out 200ms forwards',
        'slide-up-delay-3': 'slide-up 400ms ease-out 300ms forwards',
        // Scroll animations
        'fade-in-up': 'fade-in-up 400ms ease-out forwards',
        // Micro-interactions
        'scale-down': 'scale-down 150ms ease-out forwards',
        'scale-up': 'scale-up 150ms ease-out forwards',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'scale-down': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(0.98)' },
        },
        'scale-up': {
          '0%': { transform: 'scale(0.98)' },
          '100%': { transform: 'scale(1)' },
        },
      },
      transitionTimingFunction: {
        // Custom easing per DESIGN.md
        'in': 'cubic-bezier(0.4, 0, 1, 1)',
        'out': 'cubic-bezier(0, 0, 0.2, 1)',
        'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}