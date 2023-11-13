import React from 'react'
import Image from 'next/image'
import ListingHeader from './Listing/ListingHeader'
import ImagesPreview from './ImageDisplay/ImagesPreview'
import styles from '@/styles/Home.module.css'
import ListingIntro from './Listing/ListingIntro'
import ListingDescription from './Listing/ListingDescription'
import ListingCalendar from './Listing/ListingCalendar'
import { Container, Divider, Grid } from '@mui/material'

const ListingPage = () => {
    return (
        <Container
            sx={{
                width: '80%',
                margin: 'auto'
            }}
        >
            <ListingHeader />
            <ImagesPreview />
            <ListingIntro />
            <br />
            <Divider />
            <Grid sx={{ flexGrow: 1 }} container justifyContent="center" spacing={2}>
                <Grid sx={{ width:'30%'}} key={"Calendar"} item>
                    <ListingCalendar />
                </Grid>
                <Grid  sx={{ width:'70%'}} key={"Description"} item>
                    <ListingDescription />
                </Grid>
            </Grid>
        </Container>
    )
}

export default ListingPage;