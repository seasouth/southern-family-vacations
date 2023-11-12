import React from 'react'
import Typography from '@mui/material/Typography'

const ListingHeader = () => {
    return (
        <Typography 
            sx={{
                width: '80%',
                margin: 'auto',
                marginTop: '12px'
            }}
            variant="h5"
            gutterBottom
        >
            Southern Hideaway - King Bed!
        </Typography>
    )
}

export default ListingHeader;