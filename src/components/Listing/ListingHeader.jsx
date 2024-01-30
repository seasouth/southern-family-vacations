import React from 'react'
import Typography from '@mui/material/Typography'

const ListingHeader = ({
    title,
    isMobile
}) => {
    return (
        <>{
            isMobile ?
            <Typography 
                sx={{
                    marginTop: '12px'
                }}
                variant="h4"
            >
                {title}
            </Typography>
            :
            <Typography 
                sx={{
                    marginTop: '12px'
                }}
                variant="h5"
                gutterBottom
            >
                {title}
            </Typography>
        }</>
    )
}

export default ListingHeader;