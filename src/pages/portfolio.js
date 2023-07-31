import {useRouter} from 'next/router';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Portfolio.module.scss';
import {motion} from 'framer-motion';
import Head from 'next/head';
import Card from '../../components/Card/Card';

function Portfolio() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    let easing = [0.6, -0.05, 0.01, 0.99];

    const container = {
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const title = {
        hidden: {
            y: 60,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.2,
                duration: 0.6,
                ease: easing,
            },
        },
    };

    return (
        <div>
            <Head>
                <title> Portfolio </title>
                <meta
                    name='description'
                    content='Portfolio - Edozie Magdalene'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <Nav />
            <div
                className={styles.portfolioMain}
                style={{background: rootStyles}}
            >
                <motion.header variants={title}>
                    <motion.h3>My Projects</motion.h3>
                </motion.header>
                <motion.main
                    variants={container}
                    initial='hidden'
                    exit='exit'
                    whileInView='show'
                    viewport={{once: false}}
                >
                    <Card />
                </motion.main>
            </div>
            <Footer />
        </div>
    );
}

export default Portfolio;
