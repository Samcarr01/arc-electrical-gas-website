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
        // Exact brand blue sampled from original arcelectricalandgas.co.uk
        // Digital Colour Meter: R:26 G:62 B:139 => #1A3E8B
        navy: {
          DEFAULT: '#1A3E8B',
          50: '#EEF2FB',
          100: '#C8D5F3',
          600: '#1A3E8B',
          700: '#153372',
          800: '#102859',
          900: '#0B1D40',
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
