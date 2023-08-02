import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './nav.module.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import {motion, AnimatePresence} from 'framer-motion';
import cls from 'classnames';

function Nav() {
    const [menu, setMenu] = useState(true);

    const handleMenu = () => {
        setMenu(!menu);
    };
    const router = useRouter();
    const basePath = router.basePath || '';

    const showMenu = () => {
        if (window.innerWidth > 768) {
            setMenu(true);
        } else {
            setMenu(false);
        }
    };

    // animations

    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: 'easeInOut',
                duration: 0.3,
                delay: 1.2,
            },
        },
    };
    // Close the menu when the route changes
    useEffect(() => {
        if (window.innerWidth < 768) {
            setMenu(false);
        }
    }, [router.pathname]);

    useEffect(() => {
        showMenu();
        window.addEventListener('resize', showMenu);
        return () => {
            window.removeEventListener('resize', showMenu);
        };
    }, []);

    return (
        <motion.div className={styles.navContainer}>
            <AnimatePresence>
                <motion.div key='logo'>
                    <Link href='/'>
                        <Image
                            src={`${basePath}/assets/Logo.png`}
                            alt='logo'
                            width={30}
                            height={30}
                        />
                    </Link>
                </motion.div>
                {menu && (
                    <div
                        className={styles.links}
                        key='links'
                        variants={item}
                        initial={{height: 0, opacity: 0}}
                        transition={{duration: 0.5}}
                        exit='exit'
                    >
                        <div className={styles.midNav}>
                            <motion.li
                                initial={{y: 80, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.8}}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: 'easeInOut',
                                        delay: 1,
                                    },
                                }}
                            >
                                <Link
                                    href='/'
                                    className={
                                        router.pathname === '/'
                                            ? styles.linkTag
                                            : ''
                                    }
                                >
                                    Home
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{y: 80, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.7}}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: 'easeInOut',
                                        delay: 1,
                                    },
                                }}
                            >
                                <Link
                                    href='/about'
                                    className={
                                        router.pathname === '/about'
                                            ? styles.linkTag
                                            : ''
                                    }
                                >
                                    About
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{y: 80, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.6}}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: 'easeInOut',
                                        delay: 1,
                                    },
                                }}
                            >
                                <Link
                                    href='/resume'
                                    className={
                                        router.pathname === '/resume'
                                            ? styles.linkTag
                                            : ''
                                    }
                                >
                                    Resume
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{y: 80, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.5}}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: 'easeInOut',
                                        delay: 1,
                                    },
                                }}
                            >
                                <Link
                                    href='/portfolio'
                                    className={
                                        router.pathname === '/portfolio'
                                            ? styles.linkTag
                                            : ''
                                    }
                                >
                                    Portfolio
                                </Link>
                            </motion.li>
                            <motion.li
                                initial={{y: 80, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                transition={{delay: 0.4}}
                                exit={{
                                    opacity: 0,
                                    y: 90,
                                    transition: {
                                        ease: 'easeInOut',
                                        delay: 1,
                                    },
                                }}
                            >
                                <Link
                                    href='/services'
                                    className={
                                        router.pathname === '/services'
                                            ? styles.linkTag
                                            : ''
                                    }
                                >
                                    Services
                                </Link>
                            </motion.li>
                        </div>
                        <motion.div
                            className={
                                router.pathname === '/contact'
                                    ? cls(styles.linkTag, styles.contact)
                                    : styles.contact
                            }
                            initial={{y: 80, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{delay: 0.3}}
                            exit={{
                                opacity: 0,
                                y: 90,
                                transition: {
                                    ease: 'easeInOut',
                                    delay: 1,
                                },
                            }}
                        >
                            <Link href='/contact'>Contact</Link>
                        </motion.div>
                    </div>
                )}

                <motion.div className={styles.navIcons} key='icons'>
                    {!menu ? (
                        <AiOutlineMenu color='#ffd600' onClick={handleMenu} />
                    ) : (
                        <AiOutlineClose color='#ffd600' onClick={handleMenu} />
                    )}
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

export default Nav;
