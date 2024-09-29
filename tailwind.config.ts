import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        desktopImg: `url('../public/assets/images/image-web-3-desktop.jpg')`,
        mobileImg: `url('../public/assets/images/image-web-3-mobile.jpg')`
      },
      colors: {
        newsColor: {
          'off-white': 'hsl(36, 100%, 99%)',
          grayishBlue: 'hsl(233, 8%, 79%)',
          darkGrayishBlue: 'hsl(236, 13%, 42%)',
          darkBlue: 'hsl(240, 100%, 5%)',
          softOrange: 'hsl(35, 77%, 62%)',
          softRed: 'hsl(5, 85%, 63%)'
        }
      }
    }
  },
  plugins: []
};
export default config;
