import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import Dialog from '@mui/material/Dialog';
import CollectionsIcon from '@mui/icons-material/Collections';
import Stack from '@mui/material/Stack';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const AllImages = () => {
    return (
        <ImageList
            cols={2}
            sx={{ width: 800 }}
        >
            {itemData.map((item) => (
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

const ViewAllButton = () => {
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
                <AllImages />
            </Dialog>
        </>
    );
}

const itemData = [
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
    },
    {
        img: '/img/hunting/bathroom.webp',
        title: 'Swing',
    }
];

export default ViewAllButton;