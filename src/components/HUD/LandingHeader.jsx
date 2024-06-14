import React, { useState, useEffect } from 'react';
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
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 500) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <AppBar position="static">
                <Toolbar>
                    <>{
                        isMobile ?
                            <Container
                                sx={{
                                    width: '100%',
                                    margin: 'auto'
                                }}
                            >
                                <Typography variant="h6" component="div" sx={{ flexGrow: 1, textAlign: 'center', }}>
                                    <div className={styles.headerTitle}>Southern Family Vacations</div>
                                </Typography>
                            </Container>
                        :
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
                    }</>
                </Toolbar>
            </AppBar>
        </ThemeProvider>
    )
};

export default LandingHeader;