/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      'default-bg': '#f7f7f5',
      'forest': {
        50: '#dfe8da',
        100: '#ccd9c5',
        200: '#afbda8',
        300: '#93a18c',
        500: '#6d7a66',
        600: '#606e59',
        DEFAULT: '#45523e',
        900: '#32402b'
      },
      'cloud': {
        50: '#dedad1',
        100: '#ccc8be',
        DEFAULT: '#b0aca2',
        300: '#a8a497',
        400: '#969286',
        500: '#827e71',
        600: '#7d786a',
        800: '#666051',
        900: '#4f493b'
      },
      'brick': {
        50: '#e0c2bc',
        100: '#d9aea7',
        200: '#cc9991',
        300: '#bd8279',
        400: '#b8756a',
        500: '#b0675b',
        DEFAULT: '#ad5d50',
        700: '#9c4c40',
        800: '#82372c',
        900: '#6b261c'
      },
      'merino': {
        DEFAULT: '#f5ece5'
      },
      slate: colors.slate,
      gray: colors.gray,
      black: colors.black
    },
    fontFamily: {
      'sans': ['Open Sans', 'sans']
    },
    extend: {},
  },
  plugins: [],
}

