/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        arbitrum: {
          50: '#E8F4FF',
          100: '#C9E4FF',
          200: '#9DCCED',
          300: '#5BB8FF',
          400: '#12AAFF',
          500: '#1B4ADD',
          600: '#213147',
          700: '#162A3E',
          800: '#0D1E31',
          900: '#05163D',
        },
        teal: {
          300: '#9DCCED',
          400: '#5BB8FF',
          500: '#12AAFF',
          600: '#1B4ADD',
        },
      },
      animation: {
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};