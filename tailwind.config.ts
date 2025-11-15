import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Luxury Ivory & Gold Palette
        // Backgrounds
        'primary-bg': '#FFFFE3',        // soft ivory (page + hero canvas)
        'secondary-bg': '#EDE8D0',      // warm cream for cards/alternate sections
        'muted-bg': '#F7F5EE',          // subtle alternate background
        
        // Accents
        'accent-gold': '#D4AF37',       // primary gold for CTAs
        'accent-gold-hover': '#BFA430', // gold hover/pressed state
        'accent-champagne': '#F7E6CA',  // soft accent/hover
        'accent-blush': '#E8C9CF',      // tiny secondary accent
        
        // Typography & grounding
        'text-heading': '#000000',      // pure black headings
        'text-body': '#1A1A1A',         // almost black body text
        'text-muted': '#4A4A4A',        // darker muted text
        'text-charcoal': '#333333',     // inverted/footer
        
        // Borders & states
        'border-subtle': '#E0DCD7',     // subtle borders
        'disabled-bg': '#DDDDDD',       // disabled background
        'disabled-text': '#AAAAAA',     // disabled text
        
        // Legacy mappings for compatibility
        'text-primary': '#000000',
        'text-secondary': '#1A1A1A',
        'primary-orange': '#D4AF37',
        'primary-orange-light': '#F7E6CA',
        'primary-orange-dark': '#BFA430',
        'neutral-dark': '#2C2C2C',
        'neutral-gray': '#EDE8D0',
        'border-gray': '#E0DCD7',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
