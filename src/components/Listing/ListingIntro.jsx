import React, { useEffect, useState } from 'react'
import Image from 'next/image';
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
                <Typography 
                    sx={{
                        margin: 'auto'
                    }}
                    variant="subtitle2"
                    gutterBottom
                >
                    {offerings}
                </Typography>
                <br />
                <Button
                    href={link}
                >
                    Please see AirBnb for availability
                </Button>
                <br />
                <Button
                    onClick={handleClickPopover}
                    variant="contained"
                >
                    But see here for no fees!
                </Button>
                <Popover
                    open={popped}
                    anchorEl={anchor}
                    onClose={handleClosePopover}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                >
                    <Typography sx={{ p: 2 }}>Email: property@thesoutherns.net</Typography>
                    <Image
                        src={'/img/ColeVenmoQRCode.png'}
                        //fill={true}
                        width={250}
                        height={250}
                        alt={'QR Code'}
                    />
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
                        <Button
                            href={link}
                        >
                            Please see AirBnb for availability
                        </Button>
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
                        <Button
                            onClick={handleClickPopover}
                            variant="contained"
                        >
                            But see here for no fees!
                        </Button>
                        <Popover
                            open={popped}
                            anchorEl={anchor}
                            onClose={handleClosePopover}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                        >
                            <Typography sx={{ p: 2 }}>Email: property@thesoutherns.net</Typography>
                            <Typography sx={{ paddingLeft: 2 }}>Venmo:</Typography>
                            <Image
                                src={'/img/ColeVenmoQRCode.png'}
                                //fill={true}
                                width={350}
                                height={350}
                                alt={'Venmo'}
                            />
                        </Popover>
                    </Grid>
                </Grid>
            </div>
        }</>
    )
}

export default ListingIntro;