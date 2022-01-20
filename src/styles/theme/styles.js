import { mode } from '@chakra-ui/theme-tools'

const global = {
  global: (props) => ({
    'html, body': {
      fontSize: '90%',
    },

    '@media only screen and (max-width: 600px)': {
      'html, body': {
        fontSize: '85%',
      },
    },

    '.react-pdf__Page__canvas': {
      mb: '4',
    },

    nav: {
      backgroundColor: mode('whiteAlpha.900', 'gray.800')(props),
    },
  }),
}

export default global
