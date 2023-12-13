import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import CollectionsIcon from '@mui/icons-material/Collections';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const AllImages = ({
    location
}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (location === 'Matthews') {
            setImages(basementPhotos);
        } else{
            setImages(beachHousePhotos);
        }
    }, [location]);

    return (
        <ImageList
            cols={2}
            sx={{ width: 800 }}
        >
            {images.map((item) => (
                <ImageListItem key={item.img} cols={item.cols} rows={item.rows}>
                    <img
                        src={item.img}
                        alt={item.title}
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    )
}

const ViewAllButton = ({
    location
}) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Fab
                variant="extended"
                onClick={() => setOpen(true)}
                sx={{
                    position: 'absolute',
                    bottom: 16,
                    right: 16,
                    alignContent: 'space-between'
                }}
            >
                <CollectionsIcon sx={{mr: 1}} />
                View all images
            </Fab>
            <Dialog 
                open={open}
                onClose={() => setOpen(false)}
                maxWidth='lg'
            >
                <AllImages 
                    location={location}
                />
            </Dialog>
        </>
    );
}

export default ViewAllButton;

const basementPhotos = [
    {
        img: '/img/hunting/pool.webp',
        title: 'Pool',
    },
    {
        img: '/img/hunting/master-bed.webp',
        title: 'Master Bed',
    },
    {
        img: '/img/hunting/grill.webp',
        title: 'Grill',
    },
    {
        img: '/img/hunting/tv-from-table.webp',
        title: 'TV',
    },
    {
        img: '/img/hunting/back-patio.webp',
        title: 'Back Patio',
    },
    {
        img: '/img/hunting/backside-of-couch.webp',
        title: 'Living Room',
    },
    {
        img: '/img/hunting/bathroom-full.webp',
        title: 'Full Bathroom',
    },
    {
        img: '/img/hunting/swing.webp',
        title: 'Swing',
    }
];

const beachHousePhotos = [
    {
        img: '/img/sailfish/palm-tree.webp',
        title: 'Palm tree',
    },
    {
        img: '/img/sailfish/pool-lounge.webp',
        title: 'Pool lounge',
    },
    {
        img: '/img/sailfish/adirondack-pool.webp',
        title: 'Adirondack pool',
    },
    {
        img: '/img/sailfish/nighttime-pool-lights.webp',
        title: 'Nighttime pool lights',
    },
    {
        img: '/img/sailfish/parking-front.webp',
        title: 'Parking front',
    },
    {
        img: '/img/sailfish/family-tv.webp',
        title: 'Family TV',
    },
    {
        img: '/img/sailfish/family-couch.webp',
        title: 'Family couch',
    },
    {
        img: '/img/sailfish/kitchen.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/family-room-kitchen.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/breakfast-area.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/pool-from-breakfast-bar.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/front-hallway.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/kitchen-table.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/master-bedroom.webp',
        title: 'Pool shiny',
    },
    {
        img: '/img/sailfish/bed-window.webp',
        title: 'Pool shiny',
    },
]