/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
      },
      colors: {
        primary: '#2563eb', // Beautiful medical blue
        'on-primary': '#ffffff',
        'primary-container': '#dbeafe',
        'on-primary-container': '#1e3a8a',
        secondary: '#64748b',
        'secondary-container': '#f1f5f9',
        'on-secondary-container': '#334155',
        tertiary: '#059669', // Stability green
        'tertiary-container': '#d1fae5',
        'on-tertiary-container': '#064e3b',
        error: '#ef4444',
        'error-container': '#fee2e2',
        'on-error-container': '#7f1d1d',
        outline: '#94a3b8',
        surface: '#ffffff',
        'on-surface': '#0f172a',
        'on-surface-variant': '#475569',
        'surface-container-lowest': '#f8fafc',
        'surface-container-low': '#f1f5f9',
        'surface-container': '#e2e8f0',
        'surface-container-high': '#cbd5e1',
        'surface-container-highest': '#94a3b8',
      },
      fontSize: {
        'h1': ['2.5rem', { leading: 'tight', fontWeight: '800' }],
        'h2': ['2rem', { leading: 'tight', fontWeight: '700' }],
        'h3': ['1.5rem', { leading: 'snug', fontWeight: '700' }],
        'body-lg': ['1.125rem', { leading: 'normal' }],
        'body-md': ['1rem', { leading: 'normal' }],
        'label-caps': ['0.75rem', { leading: 'normal', letterSpacing: '0.1em', fontWeight: '700' }],
        'stat-value': ['1.875rem', { leading: 'none', fontWeight: '800' }],
      },
      gap: {
        gutter: '1.5rem',
      }
    },
  },
  plugins: [],
}
