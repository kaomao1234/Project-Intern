import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: '"Kanit", sans-serif',
    fontWeightMedium: 200
  },
  palette: {
    primary: {
      
      main: '#070807',
    },
    secondary: {
      main: '#f7f8f7',
    },
    info:{
      main:"#a28d8b"
    }
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: '#f7f8f7', // Custom primary button text color
          color: '#c5c4cf', // Custom primary button background color
        },
        containedSecondary: {
          backgroundColor: '#f7f8f7', // Custom secondary button text color
        color: '#141915', // Custom secondary button background color
        },
      },
    },
  },
});
export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
