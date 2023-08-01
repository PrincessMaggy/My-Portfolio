import {useRouter} from 'next/router';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Contact.module.scss';
import Head from 'next/head';
import Image from 'next/image';
import {motion} from 'framer-motion';

function Contact() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    return (
        <div>
            <Head>
                <title> Contact </title>
                <meta name='description' content='Contact - Edozie Magdalene' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <Nav />
            <div
                className={styles.contactMain}
                style={{background: rootStyles}}
            >
                <section className={styles.left}>
                    <header>
                        <div>
                            <Image
                                src={`${basePath}/assets/Logo.png`}
                                alt='img'
                                width={70}
                                height={70}
                            />
                        </div>
                        <h3>Get in touch — Let’s start a journey together</h3>
                    </header>
                    <form>
                        <div>
                            <label htmlFor='name'>Name</label>
                            <input type='text' id='name' required />
                        </div>
                        <div>
                            <label htmlFor='email'>Email</label>
                            <input type='email' id='email' required />
                        </div>
                        <div>
                            <label htmlFor='phone'>Phone Number</label>
                            <input type='tel' id='phone' required />
                        </div>
                        <div>
                            <label htmlFor='msg'>Message</label>
                            <textarea
                                id='msg'
                                rows={10}
                                cols={30}
                                required
                            ></textarea>
                        </div>
                        <div className={styles.formFooter}>
                            <div className={styles.captcha}>
                                <input type='checkbox' />
                                <span>I am not a robot</span>
                                <Image
                                    src={`${basePath}/assets/captcha.png`}
                                    width={20}
                                    height={20}
                                    alt='captcha'
                                />
                            </div>
                            <div>
                                <motion.button
                                    type='submit'
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
                                    Submit
                                </motion.button>
                            </div>
                        </div>
                    </form>
                    <p>
                        By submitting this form I accept the Privacy Policy of
                        this site.
                    </p>
                </section>
            </div>
            <Footer />
        </div>
    );
}

export default Contact;
