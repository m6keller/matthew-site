/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
          "tea-green": "#D9F4C7",
          "mindaro": "#F8FA90",
          "straw": "#F4EF88",
          "lion": "#AC9969",
          "tiffany-blue": "#9DCDC0"
      }
    },
  },
  plugins: [],
}
