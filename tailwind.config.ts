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
        primary: '#0a1f44',
        secondary: '#0f2847',
        accent: '#06b6d4',
        neutral: '#4a5568',
        muted: '#f5f8fc',
        border: '#e2e8f0',
        navy: '#0a1f44',
        royal: '#1e40af',
        cyan: '#06b6d4',
        teal: '#14b8a6',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen',
          'Ubuntu',
          'Cantarell',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
}
export default config
