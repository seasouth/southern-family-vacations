import React from 'react'
import Typography from '@mui/material/Typography'

const ListingIntro = () => {
    return (
        <div
            style={{marginLeft: '4px'}}
        >
            <Typography 
                sx={{
                    margin: 'auto',
                    marginTop: '12px'
                }}
                variant="h5"
            >
                Entire home in Matthews, North Carolina
            </Typography>
            <Typography 
                sx={{
                    margin: 'auto'
                }}
                variant="subtitle2"
                gutterBottom
            >
                4 guests ~ 2 bedrooms ~ 3 beds ~ 1.5 baths
            </Typography>
        </div>
    )
}

export default ListingIntro;