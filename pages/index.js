import Head from 'next/head'
import LandingHeader from '@/components/HUD/LandingHeader'
import ImagesPreview from '@/components/ImageDisplay/ImagesPreview'
import ListingPage from '@/components/ListingPage'
import ListingTabs from '@/components/ListingTabs'
import Quilted from '@/components/ImageDisplay/Quilted'
import { Inter } from 'next/font/google'

import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Home = () => {
    return (
        <>
            <Head>
                <title>Southern Family Vacations</title>
                <meta name="description" content="Southern Family Vacations" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/next.svg" />
            </Head>
            <main className={styles.main}>
                <div className={styles.App}>
                    <LandingHeader />
                    <ListingTabs />
                </div>
            </main>
        </>
    )
}

export default Home;