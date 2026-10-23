/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#EEF6FD', 100: '#D6E9FA', 200: '#ADD3F5', 300: '#74B3EC',
          400: '#3B8FDC', 500: '#1474C6', 600: '#085EA7', 700: '#074C88',
          800: '#063B6A', 900: '#052C4F', 950: '#031B31'
        },
        sky: { accent: '#38BDF8' },
        spark: { 400: '#FBBF24', 500: '#F5A524', 600: '#D98A0B' }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace']
      },
      boxShadow: {
        card: '0 1px 2px rgba(3,27,49,.06), 0 8px 24px -8px rgba(3,27,49,.12)'
      }
    }
  },
  plugins: []
};
