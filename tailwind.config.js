module.exports = {
 
  mode: "jit",
  content: [
    './pages/*.html',
    './node_modules/flowbite/**/*.js'
  ],
  darkMode: 'class',
  theme: {

    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
      'print': {'raw': 'print'},
      
    },
    extend: {
      fontFamily: {
        primary: ['Inter', 'sans-serif'],
        secondary: ['Roboto', 'sans-serif']
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      opacity: {
        '99': '.98',
      },
      screens: {
        'hover-hover': {'raw': '(hover: hover) and (pointer: fine)'},
      },
      keyframes: {
        glow: {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        }
      }
    },
    variables: {
      DEFAULT: {
        sizes: {
          small: '1rem',
        },
        colors: {
          red: {
            50: 'red',
          },
        },
      },
    },
    darkVariables: {
      DEFAULT: {
        colors: {
          red: {
            50: 'blue',
          },
        },
      },
    },
  },
  variants: {
    scrollbar: ['dark']
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/typography'),
    require('@mertasan/tailwindcss-variables'),  
    require('tailwind-scrollbar'),
    require('tailwind-scroll-behavior')(), // no options to configure
    require('tailwind-scrollbar-hide'),
    ],

}
