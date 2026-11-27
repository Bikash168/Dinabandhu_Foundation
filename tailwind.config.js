/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary 2-Color Combination from User's Image:
        // Color 1: Deep Terracotta Maroon / Brick Red (Door Color: #6b3a33)
        brand: {
          50: '#fbf6f5',
          100: '#f6ece9',
          200: '#edd8d4',
          300: '#dfbbb3',
          400: '#cb958a',
          500: '#b36f63',
          600: '#985145',
          700: '#7e3f36',
          800: '#6b3a33', // Exact door color
          900: '#552c26',
          950: '#321511', // Deep dark maroon
        },
        // Color 2: Warm Cream / Ivory Linen (Wall Color: #c5beb6 / #faf7f2)
        cream: {
          50: '#fcfaf7',
          100: '#f8f4ee',
          200: '#efe7dc',
          300: '#e1d5c5',
          400: '#c5beb6', // Exact wall color
          500: '#a79e94',
          600: '#898075',
          700: '#6c645b',
          800: '#544d46',
          900: '#3e3833',
          950: '#231f1c',
        },
        accent: {
          emerald: '#059669',
          forest: '#065f46',
          amber: '#d97706',
          teal: '#0d9488',
        }
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'float': 'float 4s ease-in-out infinite',
        'float-slow': 'floatSlow 7s ease-in-out infinite',
        'float-reverse': 'floatReverse 5s ease-in-out infinite',
        'pulse-slow': 'pulseSlow 4s ease-in-out infinite',
        'blob': 'blob 10s infinite',
        'shimmer': 'shimmer 2.5s infinite linear',
        'spin-slow': 'spin 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-14px) rotate(1.5deg)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.03)' },
        },
        blob: {
          '0%, 100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '50%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      borderRadius: {
        'blob': '60% 40% 30% 70% / 60% 30% 70% 40%',
        'leaf': '3.5rem 0.75rem 3.5rem 0.75rem',
        'leaf-reverse': '0.75rem 3.5rem 0.75rem 3.5rem',
        'shield': '2.5rem 2.5rem 1rem 1rem',
      }
    },
  },
  plugins: [],
}
