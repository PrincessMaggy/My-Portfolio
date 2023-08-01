import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import {useRouter} from 'next/router';
import {motion, AnimatePresence} from 'framer-motion';
import Link from 'next/link';

// components
import Nav from '../../components/Nav/Nav';
import {useEffect, useState} from 'react';

export default function Home() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const words = [
        'Software Developer',
        'Frontend Coach',
        'Technical Writer',
        'Community Manager',
    ];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[currentWordIndex]);
    useEffect(() => {
        // Function to change the word at regular intervals
        const interval = setInterval(() => {
            setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 6000);

        // Clean up the interval on component unmount
        return () => {
            clearInterval(interval);
        };
    }, [words.length]);

    useEffect(() => {
        setCurrentWord(words[currentWordIndex]);
    }, [currentWordIndex, words.length, words]);

    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    return (
        <>
            <Head>
                <title>Edozie Magdalene</title>
                <meta name='description' content='Edozie Magdalene Portfolio' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <motion.main className={styles.main} animate='animate'>
                <AnimatePresence>
                    <Nav key='nav' />
                    <div
                        className={styles.body}
                        key='body'
                        style={{background: rootStyles}}
                    >
                        <div className={styles.banner} key='banner'>
                            <h2 className={styles.firstname}>Edozie </h2>
                            <h2>Magdalene</h2>
                            <p>
                                {currentWord.split('').map((letter, index) => (
                                    <motion.span
                                        key={index}
                                        initial={{y: 80, opacity: 0}}
                                        animate={{y: 0, opacity: 1}}
                                        transition={{delay: 0.3 + index * 0.1}}
                                        exit={{
                                            opacity: 0,
                                            y: 90,
                                            transition: {
                                                ease: 'easeInOut',
                                                delay: 1,
                                            },
                                        }}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
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
                        </div>
                        <div className={styles.footer} key='footer'>
                            <motion.a
                                href='/'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Address.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                />
                            </motion.a>
                            <motion.a
                                href='https://github.com/PrincessMaggy'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Github.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                    href='https://github.com/PrincessMaggy'
                                />
                            </motion.a>
                            <motion.a
                                href='https://twitter.com/home'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Twitter.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                    href='https://twitter.com/home'
                                />
                            </motion.a>
                            <motion.a
                                href='https://www.linkedin.com/in/edoziemagdalene/'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Linkedin.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                />
                            </motion.a>
                            <motion.a
                                href='https://t.me/princessmaggy'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Telegram.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                />
                            </motion.a>
                            <motion.a
                                href='mailto:edoziemagdalene@gmail.com'
                                target='_blank'
                                rel='noopener noreferrer'
                                whileHover={{
                                    scale: 1.2,
                                    rotate: 180,
                                    borderRadius: '100%',
                                    cursor: 'pointer',
                                }}
                            >
                                <Image
                                    src={`${basePath}/assets/Email.svg`}
                                    width={25}
                                    height={25}
                                    alt='img'
                                />
                            </motion.a>
                        </div>
                    </div>
                </AnimatePresence>
            </motion.main>
        </>
    );
}
