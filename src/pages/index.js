import Head from 'next/head';
import Image from 'next/image';
import {Inter} from 'next/font/google';
import styles from '@/styles/Home.module.scss';
import {useRouter} from 'next/router';

// components
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';

export default function Home() {
    const router = useRouter();
    const basePath = router.basePath || '';

    return (
        <>
            <Head>
                <title>Edozie Magdalene</title>
                <meta name='description' content='Edozie Magdalene Portfolio' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href='/assets/Logo.png' />
            </Head>
            <main className={styles.main}>
                <Nav />
                <div className={styles.body}>
                    <div className={styles.banner}>
                        <h2 className={styles.firstname}>Edozie </h2>
                        <h2>Magdalene</h2>
                        <p>Software Developer</p>
                        <div className={styles.buttons}>
                            <div>
                                <button> Resume</button>
                            </div>
                            <div>
                                <button>Portfolio</button>
                            </div>
                        </div>
                    </div>
                    <div className={styles.footer}>
                        <Image
                            src={`${basePath}/assets/Address.svg`}
                            width={25}
                            height={25}
                            alt='img'
                        />
                        <a
                            href='https://github.com/PrincessMaggy'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`${basePath}/assets/Github.svg`}
                                width={25}
                                height={25}
                                alt='img'
                                href='https://github.com/PrincessMaggy'
                            />
                        </a>
                        <a
                            href='https://twitter.com/home'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`${basePath}/assets/Twitter.svg`}
                                width={25}
                                height={25}
                                alt='img'
                                href='https://twitter.com/home'
                            />
                        </a>
                        <a
                            href='https://www.linkedin.com/in/edoziemagdalene/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`${basePath}/assets/Linkedin.svg`}
                                width={25}
                                height={25}
                                alt='img'
                            />
                        </a>
                        <a
                            href='https://t.me/princessmaggy'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`${basePath}/assets/Telegram.svg`}
                                width={25}
                                height={25}
                                alt='img'
                            />
                        </a>
                        <a
                            href='mailto:edoziemagdalene@gmail.com'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <Image
                                src={`${basePath}/assets/Email.svg`}
                                width={25}
                                height={25}
                                alt='img'
                            />
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
}
