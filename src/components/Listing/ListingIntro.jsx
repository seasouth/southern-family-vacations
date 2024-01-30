import React, { useEffect, useState } from 'react'
import { Button, Divider, Grid, Link, Popover, Typography } from '@mui/material'

const ListingIntro = ({
    link,
    summary,
    offerings,
    isMobile
}) => {
    const [popped, setPopped] = useState(false);
    const [anchor, setAnchor] = useState(null);

    const handleClickPopover = (event) => {
        setPopped(true);
        setAnchor(event.currentTarget);
    }

    const handleClosePopover = () => {
        setPopped(false);
    }

    return (
        <>{
            isMobile ? 
            <div>
                <Typography 
                    variant="subtitle1"
                >
                    {summary}
                </Typography>
                <br />
                <Link
                    href={link} 
                    variant="h6"
                >
                    Please see AirBnb for availability
                </Link>
                <br />
                <Typography 
                    sx={{
                        margin: 'auto'
                    }}
                    variant="subtitle2"
                    gutterBottom
                >
                    {offerings}
                </Typography>
                <div
                    onClick={handleClickPopover}
                >
                    <Typography 
                        sx={{
                            margin: 'auto'
                        }}
                        variant="overline"
                    >
                        But reach out directly for no fees!
                    </Typography>
                </div>
                <Popover
                    open={popped}
                    anchorEl={anchor}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>property@thesoutherns.net</Typography>
                </Popover>
            </div>
            :
            <div
                style={{marginLeft: '4px'}}
            >
                <Grid container>
                    <Grid item xs={8}>
                        <Typography 
                            variant="h5"
                        >
                            {summary}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <Link
                            href={link}
                            variant="h5"
                        >
                            Please see AirBnb for availability
                        </Link>
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid item xs={8}>
                        <Typography 
                            sx={{
                                margin: 'auto'
                            }}
                            variant="subtitle2"
                            gutterBottom
                        >
                            {offerings}
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <div
                            onClick={handleClickPopover}
                        >
                            <Typography 
                                sx={{
                                    margin: 'auto'
                                }}
                                variant="overline"
                                gutterBottom
                            >
                                But reach out directly for no fees!
                            </Typography>
                        </div>
                        <Popover
                            open={popped}
                            anchorEl={anchor}
                            onClose={handleClosePopover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>property@thesoutherns.net</Typography>
                        </Popover>
                    </Grid>
                </Grid>
            </div>
        }</>
    )
}

export default ListingIntro;