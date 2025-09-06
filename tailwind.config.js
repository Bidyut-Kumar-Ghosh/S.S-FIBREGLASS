/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          900: '#1E40AF',
          800: '#1E3A8A',
          700: '#1D4ED8',
          600: '#2563EB',
          500: '#3B82F6',
          400: '#60A5FA',
          50: '#EFF6FF',
        },
      },
    },
  },
  plugins: [],
}
