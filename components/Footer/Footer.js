import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';
import {motion, AnimatePresence} from 'framer-motion';
import {useRouter} from 'next/router';

function Footer() {
    const router = useRouter();
    const basePath = router.basePath || '';

    return (
        <motion.div className={styles.footer}>
            <div>
                <p>&copy; Copyright 2023 // Designed by Edozie Magdalene</p>
            </div>
            <motion.div
                initial='initial'
                animate='animate'
                style={{display: 'flex'}}
            >
                <motion.a
                    href='/'
                    target='_blank'
                    rel='noopener noreferrer'
                    whileHover={{
                        scale: 1.2,
                        rotate: 180,
                        borderRadius: '100%',
                        cursor: 'pointer',
                        transition: {duration: 0.3},
                    }}
                >
                    {' '}
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
                        transition: {duration: 0.3},
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
            </motion.div>
        </motion.div>
    );
}

export default Footer;
