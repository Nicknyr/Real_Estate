import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#7678ED',
      //main: '#3D348B'
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      main: '#3D348B'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
  typography: {
    h1: {
        fontWeight: 'bold'
    },
    h2: {
        fontWeight: 'bold'
    },
    h3: {
        fontWeight: 'bold',
        color: 'rgb(59, 65, 68)'
    },
    h4: {
        fontWeight: 'bold',
        color: 'rgb(59, 65, 68)',
        margin: '1rem 0'
    },
    h5: {
        fontWeight: 'bold',
        color: 'rgb(59, 65, 68)',
        margin: '.5rem 0'
    }
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
        // Name of the rule
        text: {
          // Some CSS
          color: '#302B27',
          textTransform: 'none',
          fontSize: '1rem',

          '&:hover': {
            background: '#7678ED',
            color: '#FFF'
          }
        },
        outlined: {
            textTransform: 'none'
        },
        contained: {
            background: '#7678ED !important',
            color: '#FFF',
            fontWeight: 'bold',

            '&:hover': {
                background: '#FFF !important',
                color: '#7678ED',
                border: '1px solid #7678ED'
            }
        }
      },
      MuiDrawer: {
          paper: {
              background: '#3c4145',
              color: '#FFF'
          }
      }
  }
});

export default theme;