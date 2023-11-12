import { ThemeProvider, createTheme } from '@mui/material/styles';
import '@/styles/app.css';

const theme = createTheme({
    background: "#f7df1e",
    color: "#24292e",
    components: {
      MuiImageList: {
        styleOverrides: {
          root: {
            borderRadius: 'inherit'
          }
        }
      },
      MuiImageListItem: {
        styleOverrides: {
          img: {
            //objectFit: 'fill'
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: 'black',
            borderRadius: '8px'
          }
        }
      },
      MuiCardMedia: {
        styleOverrides: {
          root: {
            maxHeight: '30%'
          }
        }
      },
    }
});

export default function App({ Component, pageProps }) {
    return (
        <ThemeProvider theme={theme}>
            <Component {...pageProps} />
        </ThemeProvider>
    )
}