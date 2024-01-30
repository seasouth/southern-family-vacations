import React, { useState, useEffect } from 'react'
import { Container, Divider, Tab, Tabs, Typography } from '@mui/material';
import ListingPage from './ListingPage';

const Coordinates = {
    Basement: {
        latitude: 35.121,
        longitude: -80.754
    },
    Sailfish: {
        latitude: 30.226,
        longitude: -81.399
    }
}

const ListingTabs = () => {
    const [currentTab, setCurrentTab] = useState("Ponte Vedra");
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (window.innerWidth > 500) {
            setIsMobile(false);
        } else {
            setIsMobile(true);
        }
    }, []);

    const handleTabChange = (event, newTab) => {
        setCurrentTab(newTab);
    }

    return (
        <Container
            sx={{
                width: isMobile ? '98%' : '80%',
                margin: 'auto'
            }}
        >
            <Tabs
                value={currentTab}
                onChange={handleTabChange}
            >
                <Tab 
                    label="Ponte Vedra"
                    value="Ponte Vedra"
                />
                <Tab
                    label="Matthews"
                    value="Matthews"
                />
            </Tabs>
            <Divider />
            {currentTab === "Ponte Vedra" &&
            <ListingPage 
                location={currentTab}
                link={"https://www.airbnb.com/rooms/49788990?source_impression_id=p3_1702347363_Qv8FuZNtbYsylVsa"}
                isMobile={isMobile}
                title="Pool Home at Ponte Vedra Beach"
                summary="Entire home in Ponte Vedra Beach, Florida"
                offerings="7 guests ~ 3 bedrooms ~ 5 beds ~ 2 baths"
                lat={Coordinates.Sailfish.latitude}
                long={Coordinates.Sailfish.longitude}
            >
                <>
                    <Typography 
                        sx={{
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        Ponte Vedra Beach retreat with Pool! Southern Palms is newly renovated and furnished. Ideal for beach lovers, shoppers, and golfers; this single-story residence with 3 bedrooms and 2 baths offers all the home essentials, plenty of private outdoor entertainment, and a prime location near the Atlantic Ocean!
Close to St. Augustine, Mayo Clinic and Sawgrass, Ponte Vedra Beach is the perfect place to get away, with everything you could ever need close by!
                    </Typography>
                    <Typography 
                        sx={{
                            margin: 'auto',
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        This is a single family home in a quiet residential neighborhood close to the beach, with a private pool in the backyard.
                    </Typography>
                    <Typography 
                        sx={{
                            margin: 'auto',
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        Guests have access to the entire home and fenced in backyard. There is a washer and dryer in the garage that you are also welcome to use during your stay.
                    </Typography>
                </>
            </ListingPage>}
            {currentTab === "Matthews" &&
            <ListingPage 
                location={currentTab}
                link={"https://www.airbnb.com/rooms/757324657657270037?guests=1&adults=1&viralityEntryPoint=1&s=76&unique_share_id=954b8691-d430-4020-91ff-63f5b93a8e9f&source_impression_id=p3_1699484809_P00DfgiIwHZtNH5F"}
                isMobile={isMobile}
                title="Southern Hideaway - King Bed!"
                summary="Entire basement in Matthews, North Carolina"
                offerings="4 guests ~ 2 bedrooms ~ 3 beds ~ 1.5 baths"
                lat={Coordinates.Basement.latitude}
                long={Coordinates.Basement.longitude}
            >
                <>
                    <Typography 
                        sx={{
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        Relax in the secluded backyard beside the pool, or take a dip when you stay in our Southern Hideaway. This completely renovated guest suite is just 20 minutes from uptown Charlotte. The full basement has two bedrooms, full kitchen, 75” Smart TV, ping pong table and 1 1/2 bathrooms. Check yourself in the private back door for your relaxing stay! Mark and Robin live upstairs when in town, but you will have the entire spacious basement (1400 square feet) to yourself. Note: pool is not heated.
                    </Typography>
                    <Typography 
                        sx={{
                            margin: 'auto',
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        The Guest Suite is spacious and private. You will have the entire basement to yourself with your own private entrance and a locked interior door that you control. There are 2 bedrooms with a full “Jack and Jill” bathroom that is accessible from both bedrooms, and a half bath for your convenience. The main area has a 75” TV, perfect for watching movies, a ping pong table and a dining table overlooking the pool and wooded area outside.
                    </Typography>
                    <Typography 
                        sx={{
                            margin: 'auto',
                            marginTop: '12px'
                        }}
                        variant="body1"
                        gutterBottom
                    >
                        You have the entire basement to yourself.
                    </Typography>
                </>
            </ListingPage>}
        </Container>
    )
}

export default ListingTabs;