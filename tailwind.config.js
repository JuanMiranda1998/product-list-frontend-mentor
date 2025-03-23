

/** @type {import('tailwindcss').Config} */
const colors = import('tailwindcss/colors')

export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
    colors: {
      red: '#c73a0f',
      green: '#1ea475',
      rose: {
        50: '#fcf9f7',
        100: '#f4edeb',
        300: '#c9aea6',
        400: '#ad8985',
        500: '#87635a',
        900: '#260f08',
      },
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      ...colors
    },
    fontFamily: {
      body: ['"Red Hat Text"', 'sans-serif']
    }
  },
  plugins: [],
}

