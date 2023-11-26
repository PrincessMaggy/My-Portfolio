import React from 'react';
import {motion} from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../src/styles/Portfolio.module.scss';
import {useRouter} from 'next/router';

function Card() {
    const router = useRouter();
    const basePath = router.basePath || '';

    const item = {
        hidden: {opacity: 0, y: 20},
        show: {
            opacity: 1,
            y: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.2,
            },
        },
    };
    return (
        <>
            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://movie-app-eight-rust.vercel.app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            WatchFlix
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://movie-app-eight-rust.vercel.app'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/projects (1).png`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://coffee-app-sandy.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            Coffee app
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://coffee-app-sandy.vercel.app/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/projects (2).png`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://princessmaggy.github.io/github_finder/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            Github Finder
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://princessmaggy.github.io/github_finder/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/projects (1).svg`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://princessmaggy.github.io/blogr/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            Blog
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://princessmaggy.github.io/blogr/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/projects (2).svg`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://princessmaggy.github.io/Ruby-Fashion-Store/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            E-commerce site
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://princessmaggy.github.io/Ruby-Fashion-Store/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/store.png`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>

            <motion.div className={styles.card} variants={item}>
                <motion.div>
                    <Link
                        href='https://princessmaggy.github.io/music-player/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
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
                            Music Player
                        </motion.button>
                    </Link>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1}}
                    transition={{
                        type: 'spring',
                        stiffness: 400,
                        damping: 10,
                    }}
                >
                    <Link
                        href='https://princessmaggy.github.io/music-player/'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <Image
                            src={`${basePath}/assets/projects (4).svg`}
                            alt='project'
                            width={300}
                            height={200}
                        />
                    </Link>
                </motion.div>
            </motion.div>
        </>
    );
}

export default Card;
