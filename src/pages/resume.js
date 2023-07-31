import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Resume.module.scss';
import {useRouter} from 'next/router';
import Image from 'next/image';
import Head from 'next/head';
import {motion} from 'framer-motion';

function Resume() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;
    return (
        <div className={styles.resumeContainer}>
            <Head>
                <title> Resume </title>
                <meta name='description' content='Resume - Edozie Magdalene' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <Nav />
            <main
                className={styles.resumeMain}
                style={{background: rootStyles}}
            >
                <motion.section
                    initial={{opacity: 0, y: -200}}
                    animate={{opacity: 1, y: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                    }}
                >
                    <div className={styles.resumeLeft}>
                        <h2>CERTIFICATIONS</h2>
                        <div className={styles.line}></div>
                        <ul>
                            <li>NATIONAL YOUTH SERVICE CORP</li>
                            <p>--- NYSC NIGERIA ---</p>

                            <li>FRONT-END DEVELOPMENT LIBRARIES</li>
                            <p>--- FreeCode Camp ---</p>

                            <li>FRONT-END WEB DEVELOPMENT</li>
                            <p>--- FemCode Africa ---</p>

                            <li>ADVANCED ENGLISH GRAMMAR COURSE</li>
                            <p>--- Springgates Grammer School ---</p>
                        </ul>
                    </div>
                    <div>
                        <Image
                            src={`${basePath}/assets/maggy2.png`}
                            alt='maggy'
                            width={200}
                            height={200}
                        />
                    </div>
                </motion.section>
                <motion.section
                    className={styles.sect2}
                    initial={{opacity: 0, x: 200}}
                    animate={{opacity: 1, x: 0}}
                    transition={{
                        duration: 0.5,
                        delay: 0.6,
                    }}
                >
                    <div className={styles.exp}>
                        <h2>EXPERIENCES</h2>
                        <div className={styles.line}></div>

                        <div>
                            <div className={styles.experiences}>
                                <Image
                                    src={`${basePath}/assets/work (1).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <li>NUBIAVILLE LTD</li>
                                    <p>Software Developer</p>
                                </div>
                            </div>
                            <div className={styles.experiences}>
                                <Image
                                    src={`${basePath}/assets/work (2).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <li>HERTECHTRAIL ACADEMY</li>
                                    <p>Academy/Community Lead</p>
                                </div>
                            </div>
                            <div className={styles.experiences}>
                                <Image
                                    src={`${basePath}/assets/work (3).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <div>
                                    <li>HASHNODE</li>
                                    <p> Technical Writer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.skill}>
                        <h2>SKILL SET</h2>
                        <div className={styles.line}></div>

                        <div>
                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (1).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>HTML 5</p>
                            </div>

                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (6).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>CSS 3</p>
                            </div>
                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (5).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>SASS</p>
                            </div>
                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (4).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>Javascript</p>
                            </div>
                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (3).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>React JS</p>
                            </div>
                            <div className={styles.skillset}>
                                <Image
                                    src={`${basePath}/assets/skillset (2).svg`}
                                    alt='img'
                                    width={20}
                                    height={20}
                                />
                                <p>Next JS</p>
                            </div>
                        </div>
                    </div>
                </motion.section>
            </main>
            <Footer />
        </div>
    );
}

export default Resume;
