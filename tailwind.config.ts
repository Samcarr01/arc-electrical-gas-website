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
        // Brand palette — matched from logo
        // Background/dark: near-black (logo background colour)
        // Yellow: lightning bolt accent
        // Blue: gas flame accent
        navy: {
          DEFAULT: '#111827',
          50: '#F9FAFB',
          100: '#F3F4F6',
          600: '#111827',
          700: '#0D1117',
          800: '#080C10',
          900: '#020408',
        },
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          '"Helvetica Neue"',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}

export default config
