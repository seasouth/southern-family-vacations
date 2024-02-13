import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ViewAllButton from './ViewAllButton';
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, FreeMode, Navigation } from "swiper/modules"
import "swiper/css";
import "swiper/css/navigation";

const ImagesPreview = ({
    isMobile,
    location
}) => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (location === "Matthews") {
            setImages(basementPhotos);
        } else {
            setImages(beachHousePhotos);
        }
    }, [location]);

    return (
        <>{
            isMobile ?
            <>
            <Swiper
                key={location}
                modules={[Pagination]}
                slidesPerView={1}
                pagination={{
                    clickable: true,
                }}
                //spaceBetween={3}
                //navigation={true}
                //freeMode={true}
                loop={false}
            >
                {images.map((item) =>
                    <SwiperSlide key={`${item.img}`}>
                        {
                        <Image
                            src={item.img}
                            //fill={true}
                            width={350}
                            height={350}
                            alt={item.title}
                        />
                        }
                    </SwiperSlide>
                )}
            </Swiper>
            </>
            :
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
                <ViewAllButton 
                    location={location}
                />
            </Box>
        }</>
    )
}

export default ImagesPreview;

const basementPhotos = [
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

const beachHousePhotos = [
    {
        img: '/img/sailfish/palm-tree.webp',
        title: 'Palm tree',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/pool-lounge.webp',
        title: 'Pool lounge',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/adirondack-pool.webp',
        title: 'Adirondack pool',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/nighttime-pool-lights.webp',
        title: 'Nighttime pool lights',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/parking-front.webp',
        title: 'Parking front',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/family-tv.webp',
        title: 'Family TV',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/family-couch.webp',
        title: 'Family couch',
        rows: 1,
        cols: 1
    },
    {
        img: '/img/sailfish/pool-shiny.webp',
        title: 'Pool shiny',
        rows: 1,
        cols: 1
    },
]