import React from 'react'
import Image from 'next/image'
import ListingHeader from './Listing/ListingHeader'
import ImagesPreview from './ImageDisplay/ImagesPreview'
import styles from '@/styles/Home.module.css'
import ListingIntro from './Listing/ListingIntro'

const ListingPage = () => {
    return (
        <>
            <ListingHeader />
            <ImagesPreview />
            <ListingIntro />
            <br />
        </>
    )
}

export default ListingPage;