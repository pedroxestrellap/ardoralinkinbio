/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Bebas Neue"', 'sans-serif'],
        body:    ['"Josefin Sans"', 'sans-serif'],
        script:  ['"Dancing Script"', 'cursive'],
      },
      colors: {
        cream: '#F4EFE8',
        ink:   '#111111',
      },
      letterSpacing: {
        wider2: '0.18em',
        widest2: '0.24em',
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.25rem',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        bloom: {
          '0%':   { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      animation: {
        'fade-in':   'fadeIn  0.5s ease both',
        'bloom':     'bloom   0.6s cubic-bezier(0.34,1.56,0.64,1) both',
        'fade-up-1': 'fadeUp  0.5s ease 0.10s both',
        'fade-up-2': 'fadeUp  0.5s ease 0.18s both',
        'fade-up-3': 'fadeUp  0.5s ease 0.26s both',
        'fade-up-4': 'fadeUp  0.5s ease 0.34s both',
        'fade-up-5': 'fadeUp  0.5s ease 0.42s both',
        'fade-up-6': 'fadeUp  0.5s ease 0.50s both',
        'fade-up-7': 'fadeUp  0.5s ease 0.58s both',
        'fade-up-8': 'fadeUp  0.5s ease 0.66s both',
        'fade-up-9': 'fadeUp  0.5s ease 0.74s both',
      },
    },
  },
  plugins: [],
};
