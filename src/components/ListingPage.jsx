import React from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
import ListingHeader from './Listing/ListingHeader'
import ImagesPreview from './ImageDisplay/ImagesPreview'
import styles from '@/styles/Home.module.css'
import ListingIntro from './Listing/ListingIntro'
import ListingDescription from './Listing/ListingDescription'
import SendToSite from './Listing/SendToSite'
import ListingCalendar from './Listing/ListingCalendar'
import { Container, Divider, Grid } from '@mui/material'

const Coordinates = {
    Basement: {
        latitude: 35.121,
        longitude: -80.754
    },
    Sailfish: {
        latitude: 30,
        longitude: -81.399
    }
}

const ListingPage = ({
    location,
    link,
    isMobile,
    title,
    summary,
    offerings,
    lat,
    long,
    children
}) => {

    const LocalMap = dynamic(
        () => import('./Listing/ListingMap'),
        { ssr: false }
    )
    return (
        <>{
        isMobile ?
            <>
                <br />
                <ImagesPreview
                    isMobile={isMobile}
                    location={location}
                />
                <ListingHeader 
                    title={title}
                    isMobile={isMobile}
                />
                <ListingIntro
                    link={link}
                    summary={summary}
                    offerings={offerings}
                    isMobile={isMobile}
                />
                <br />
                <Divider />
                <Divider />
                <LocalMap
                    lat={lat}
                    long={long}
                    isMobile={isMobile}
                />
                <>
                    {children}
                </>
                <br />
            </>
            :
            <>
                <ListingHeader 
                    title={title}
                    isMobile={isMobile}
                />
                <ImagesPreview
                    isMobile={isMobile}
                    location={location}
                />
                <ListingIntro
                    link={link}
                    summary={summary}
                    offerings={offerings}
                    isMobile={isMobile}
                />
                <br />
                <Divider />
                <Divider />
                <Grid sx={{ flexGrow: 1 }} container justifyContent="center" spacing={2}>
                    <Grid sx={{ width:'30%'}} key={"Calendar"} item>
                        {/** <ListingCalendar /> */}
                        <LocalMap
                            lat={lat}
                            long={long}
                            isMobile={isMobile}
                        />
                    </Grid>
                    <Grid  sx={{ width:'70%'}} key={"Description"} item>
                        {children}
                    </Grid>
                </Grid>
                <br />
            </>
        }</>
    )
}

export default ListingPage;