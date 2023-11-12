import * as React from 'react';
import Image from 'next/image';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image, size, rows = 2, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Quilted() {
  return (
    <ImageList
      sx={{ width: '80%', margin: 'auto', paddingTop: '4px' }}
      variant="quilted"
      cols={2}
      rowHeight={175}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 2}>
          <img
            src={item.img}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: '/img/hunting/pool.webp',
    title: 'Pool',
    rows: 4,
    cols: 1,
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
    title: 'Coffee',
    cols: 1,
  },
  {
    img: '/img/hunting/back-patio.webp',
    title: 'Hats',
    cols: 1,
  },
  {
    img: '/img/hunting/kitchen.webp',
    title: 'Honey',
    author: '@arwinneil',
    rows: 4,
    cols: 1,
  },
  {
    img: '/img/hunting/swing.webp',
    title: 'Basketball',
  },
  {
    img: '/img/hunting/tv.webp',
    title: 'Fern',
  },
  {
    img: '/img/hunting/path-from-driveway.webp',
    title: 'Mushrooms',
    rows: 4,
    cols: 1,
  },
  {
    img: '/img/hunting/half-bed.webp',
    title: 'Tomato basil',
  },
  {
    img: '/img/hunting/path-to-backyard.webp',
    title: 'Sea star',
  },
  {
    img: '/img/hunting/pool-table.webp',
    title: 'Bike',
    cols: 1,
  },
];
