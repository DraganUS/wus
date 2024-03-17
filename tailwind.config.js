/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      }
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.fluid-container': {
          width: '100%',
          maxWidth: `calc(1440px + calc(env(safe-area-inset-left, 0rem)))`,
          marginLeft: 'auto',
          marginRight: 'auto',

          // Use safe-area-inset together with default padding for Apple devices with a notch.
          paddingLeft: `calc(env(safe-area-inset-left, 0rem) + theme('spacing.4'))`,
          paddingRight: `calc(env(safe-area-inset-right, 0rem) + theme('spacing.4'))`
        },
      };
      addUtilities(newUtilities, [ 'fluid-container']);
    }),
  ]
};