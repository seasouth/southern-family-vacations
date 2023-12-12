import * as React from 'react';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ViewAllButton from './ViewAllButton';

const ImagesPreview = () => {
    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <ImageList
                variant="quilted"
                cols={4}
                rowHeight={200}
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
            <ViewAllButton />
        </Box>
    )
}

export default ImagesPreview;

const itemData = [
    {
        img: '/img/hunting/pool.webp',
        title: 'Pool',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/master-bed.webp',
        title: 'Master Bed',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/grill.webp',
        title: 'Grill',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/tv-from-table.webp',
        title: 'TV',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/back-patio.webp',
        title: 'Back Patio',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/backside-of-couch.webp',
        title: 'Living Room',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/bathroom-full.webp',
        title: 'Full Bathroom',
        rows: 1,
        cols: 1,
    },
    {
        img: '/img/hunting/swing.webp',
        title: 'Swing',
        rows: 1,
        cols: 1,
    }
];
