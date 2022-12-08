/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          marine: 'hsl(213, 96%, 18%)',
          purplish: 'hsl(243, 100%, 62%)',
          pastel: 'hsl(228, 100%, 84%)',
          light: 'hsl(206, 94%, 87%)',
          strawberry: 'hsl(354, 84%, 57%)',
        },
        neutral: {
          coolgray: 'hsl(231, 11%, 63%)',
          lightgray: 'hsl(229, 24%, 87%)',
          magnolia: 'hsl(217, 100%, 97%)',
          alabaster: 'hsl(231, 100%, 99%)',
          white: 'hsl(0, 0%, 100%)',
        },
      },
    },
  },
  plugins: [],
};
