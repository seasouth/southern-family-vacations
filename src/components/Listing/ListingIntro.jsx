import React from 'react'
import { Grid, Link, Typography } from '@mui/material'

const ListingIntro = ({
    summary,
    offerings
}) => {
    return (
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
                        href="https://www.airbnb.com/rooms/757324657657270037?guests=1&adults=1&viralityEntryPoint=1&s=76&unique_share_id=954b8691-d430-4020-91ff-63f5b93a8e9f&source_impression_id=p3_1699484809_P00DfgiIwHZtNH5F" 
                        variant="h5"
                    >
                        Please see AirBnb for availability
                    </Link>
                </Grid>
            </Grid>
            <Typography 
                sx={{
                    margin: 'auto'
                }}
                variant="subtitle2"
                gutterBottom
            >
                {offerings}
            </Typography>
        </div>
    )
}

export default ListingIntro;