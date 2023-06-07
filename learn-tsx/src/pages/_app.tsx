import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: '"Kanit", sans-serif',
    fontWeightMedium: 300
  },
  palette: {
    primary: {
      main: '#f7f8f7',
    },
    secondary: {
      main: '#070807',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          color: '#f7f8f7', // Custom primary button text color
          backgroundColor: '#c5c4cf', // Custom primary button background color
        },
        containedSecondary: {
          color: '#f7f8f7', // Custom secondary button text color
          backgroundColor: '#141915', // Custom secondary button background color
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
