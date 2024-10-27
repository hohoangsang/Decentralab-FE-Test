import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        silverSand: '#C0C0C9',
        ghostWhite: '#FCFCFD',
        skyBlue: '#97CFFD',
        primaryBg: '#0B0E18',
        footerBg: '#101423',
        charcoalBlue: '#313856'
      },
      fontFamily: {
        primaryBold: ['Bold'],
        primaryExtraLight: ['ExtraLight'],
        primaryLight: ['Light'],
        primaryMedium: ['Medium'],
        primaryRegular: ['Regular'],
        primarySemiBold: ['SemiBold'],
        primaryThin: ['Thin']
      },
      lineHeight: {
        primaryLineHeight: '48px'
      },
      backgroundImage: {
        heroBgGradient:
          'linear-gradient(270deg, rgba(62, 162, 244, 0) 13.07%, rgba(66, 62, 244, 0.1) 103.18%)',
        primaryGradient:
          'linear-gradient(90deg, #ABECA2 -1.42%, #2FB3FE 30.38%, #6A8EEA 65.09%, #A185F4 99.55%)',
        primaryConicGradient:
          'conic-gradient(from 124.76deg at 49.86% 36.95%, #A185F4 -5.64deg, #ABECA2 0.06deg, #2FB3FE 111.61deg, #6A8EEA 233.41deg, #A185F4 354.35deg, #ABECA2 360.06deg)',
        layer2Gradient:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.2) 0.01%, rgba(4, 9, 20, 0.2) 31.13%, rgba(255, 255, 255, 0.2) 110.67%)'
      }
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px',
      // => @media (min-width: 1280px) { ... }

      extraLarge: '1680px'
      // => @media (min-width: 1680px) { ... }
    },
    maxWidth: {
      maxWidthSection: '2122px'
    },
    scale: {
      scale2: "2"
    }
  },
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        '.customContainer': {
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '2122px'
        }
      });
    })
  ]
};
