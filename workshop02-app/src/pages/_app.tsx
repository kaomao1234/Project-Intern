import type { AppProps } from 'next/app'
import { createTheme, ThemeProvider } from '@mui/material'
import { ThemeOptions } from '@mui/material/styles';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#6b676f',
    },
    secondary: {
      main: '#f2f3f2',
    },
    error: {
      main: '#d32f2f',
    },
    warning: {
      main: '#ed6c02',
    },
    success: {
      main: '#6b676f',
    },
    text: {
      primary: '#171816',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: 'Kanit',
  },
};
const theme = createTheme(themeOptions);
export default function App({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
