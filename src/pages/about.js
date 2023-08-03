import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import Image from 'next/image';
import Head from 'next/head';
import styles from '../styles/About.module.scss';
import {useRouter} from 'next/router';
import {motion} from 'framer-motion';
import Link from 'next/link';

function About() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    return (
        <>
            <Head>
                <title>About Magdalene</title>
                <meta name='description' content=' About Edozie Magdalene' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <div className={styles.aboutContainer}>
                <Nav />
                <main
                    className={styles.aboutMain}
                    style={{background: rootStyles}}
                >
                    <motion.div
                        className={styles.aboutLeft}
                        initial={{opacity: 0, x: -200}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                    >
                        <Image
                            src={`${basePath}/assets/Maggy.png`}
                            width={200}
                            height={200}
                            alt='Maggy'
                        />
                    </motion.div>
                    <motion.div
                        className={styles.aboutRight}
                        initial={{opacity: 0, x: 200}}
                        animate={{opacity: 1, x: 0}}
                        transition={{
                            duration: 0.5,
                            delay: 0.6,
                        }}
                    >
                        <h1>ABOUT</h1>
                        <div className={styles.line}>
                            <Image
                                src={`${basePath}/assets/line.svg`}
                                width={200}
                                height={20}
                                alt='img'
                            />
                        </div>
                        <h5>Software Developer/Coach</h5>
                        <p>
                            Diligent software engineer with years practical
                            experience in front end web development; managing
                            tech communities and building web pages using
                            Application Programming Interface, Cascading Style
                            Sheet Frameworks and JavaScript Libraries. I am also
                            eager to learn new technologies and develop
                            innovative ideas through the application of the
                            needed professional skills, stewardship and ethical
                            practices.
                        </p>
                        <div className={styles.buttons}>
                            <div>
                                <Link href='/resume'>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {duration: 0.3},
                                        }}
                                        whileTap={{scale: 0.9}}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                    >
                                        Resume
                                    </motion.button>
                                </Link>
                            </div>
                            <div>
                                <Link href='/portfolio'>
                                    <motion.button
                                        whileHover={{
                                            scale: 1.1,
                                            transition: {duration: 0.3},
                                        }}
                                        whileTap={{scale: 0.9}}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 400,
                                            damping: 10,
                                        }}
                                    >
                                        Portfolio
                                    </motion.button>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </main>
                <Footer />
            </div>
        </>
    );
}

export default About;
