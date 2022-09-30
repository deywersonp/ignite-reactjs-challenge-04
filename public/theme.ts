import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "300": "#47585B",
      "100": "#DADADA",
      "50": "#F5F8FA"
    },
    yellow: {
      "400": "#FFBA08",
    },
    yellowAlfa: {
      "500": "rgba(255, 186, 8, .5)",
    },
  },
  fonts: {

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