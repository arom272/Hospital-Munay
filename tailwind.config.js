/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Hospital Munay brand palette
        hm: {
          primary:       '#1A365D',  // Navy blue
          'primary-800': '#142b4a',
          'primary-700': '#1e3f6e',
          'primary-600': '#244d86',
          secondary:     '#72A0C1',  // Steel blue
          'secondary-200':'#c5d9e8',
          'secondary-100':'#e8f1f8',
          tertiary:      '#09D6D4',  // Cyan accent
          'tertiary-600':'#07b8b6',
          neutral:       '#F8FAFC',  // Off-white background
        },
      },
      fontFamily: {
        sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 1px 3px 0 rgba(26,54,93,0.08), 0 1px 2px -1px rgba(26,54,93,0.06)',
        'card-hover': '0 4px 12px 0 rgba(26,54,93,0.12)',
      },
    },
  },
  plugins: [],
};
