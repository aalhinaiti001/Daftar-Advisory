// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f1ea',
          soft: '#faf7f0',
          dark: '#ebe6da',
        },
        ink: {
          DEFAULT: '#1a1814',
          soft: '#322d27',
        },
        rust: {
          DEFAULT: '#a8341f',
          deep: '#842815',
        },
        muted: '#756f67',
        line: 'rgba(26, 24, 20, 0.12)',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Fraunces', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        'daftar': '22px',
      }
    },
  },
}