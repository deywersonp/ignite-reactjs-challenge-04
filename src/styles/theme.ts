import { extendTheme } from '@chakra-ui/react';

const sizes = {
  13: "3.25rem",
  13.5: "3.375rem",
  17: "4.375rem",
  18: "4.5rem",
  19: "4.75rem",
  25: "6.25rem",
  35: "8.75rem",
  84: "23rem",
};

export const theme = extendTheme({
  space: sizes,
  sizes,
  colors: {
    gray: {
      "300": "#47585B",
      "200": "#999999",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    yellow: {
      "400": "#FFBA08",
    },
    yellowAlfa: {
      "500": "rgba(255, 186, 8, .5)",
    },
    heading: {
      "50": "#F5F8FA"
    },
    info: {
      "100": "#DADADA"
    },
  },
  fonts: {
    body: "Poppins",
    heading: "Poppins",
    cities: "Barlow"
  },
  lineHeights: {
    7.5: "1.875rem",
    13: "3.375rem",
    18: "4.5rem"
  },
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        color: 'gray.300'
      }
    }
  }
})