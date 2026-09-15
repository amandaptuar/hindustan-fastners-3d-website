/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#FDFBF7',
          100: '#F9F4E8',
          200: '#F2E4C2',
          300: '#EBD196',
          400: '#E5C158',
          500: '#D4AF37', // Classic metallic gold
          600: '#B89327',
          700: '#94731B',
          800: '#755815',
          900: '#523C0C',
        },
        dark: {
          950: '#07080A',
          900: '#0E1015',
          850: '#14171F',
          800: '#1C202B',
          700: '#2A303F',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      }
    },
  },
  plugins: [],
}
