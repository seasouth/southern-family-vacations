import React from 'react';
import Image from 'next/image';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { AppBar, Container, Toolbar, Typography } from '@mui/material';

import styles from '@/styles/LandingHeader.module.css'

const theme = createTheme({
    palette: {
        auth: {
          main: "#b8860b",
          contrastText: "#fff"
        }
    },
    background: "#f7df1e",
    color: "#24292e",
    components: {
        MuiToolbar: {
            styleOverrides: {
                root: {
                    backgroundColor: 'darkolivegreen',
                    paddingLeft: '0px !important',
                    paddingRight: '0px !important'
                }
            }
        }
    }
});

const LandingHeader = () => {

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <Container
                        sx={{
                            width: '80%',
                            margin: 'auto'
                        }}
                    >
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'left', }}>
                            <div className={styles.headerTitle}>Southern Family Vacations</div>
                        </Typography>
                    </Container>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
};

export default LandingHeader;