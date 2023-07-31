import {useRouter} from 'next/router';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Services.module.scss';
import Image from 'next/image';
import Head from 'next/head';
import {motion} from 'framer-motion';

function Services() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    const container = {
        show: {
            transition: {
                staggerChildren: 0.2,
            },
        },
    };
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
        <div>
            <Head>
                <title> Services </title>
                <meta
                    name='description'
                    content='Services - Edozie Magdalene'
                />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <link rel='icon' href={`${basePath}/assets/Logo.png`} />
            </Head>
            <Nav />
            <div
                className={styles.servicesMain}
                style={{background: rootStyles}}
            >
                <motion.main
                    variants={container}
                    initial='hidden'
                    exit='exit'
                    whileInView='show'
                    viewport={{once: false}}
                >
                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Write.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>Technical Writing</h3>
                        </div>
                        <p>
                            Are you in need of clear, concise, and
                            well-structured technical documentation? My
                            technical writing service provides expertly crafted
                            content that simplifies complex concepts and
                            communicates your ideas effectively. Whether user
                            manuals, API documentation, or technical guides, I
                            ensure that your audience can easily grasp the
                            information they need. Let me, a skilled technical
                            writer, help you deliver professional and
                            user-friendly documentation for your products and
                            services.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Smartphone.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>Responsive Web Design</h3>
                        </div>
                        <p>
                            In the current mobile-driven world, having a
                            responsive website is essential to reach a wider
                            audience. My responsive design service ensures that
                            your website adapts seamlessly to different screen
                            sizes, from desktops to smartphones and everything
                            in between. With my expertise in modern web
                            technologies, I create visually stunning and
                            user-friendly websites that provide an optimal
                            viewing experience on any device. Embrace the future
                            of web design with my responsive solutions and stay
                            ahead of the competition.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Coach.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>Coaching and Mentorship</h3>
                        </div>
                        <p>
                            Looking to level up your frontend development
                            skills? My frontend coaching service offers
                            personalized, one-on-one guidance to help you become
                            a proficient web developer. Whether you are a
                            beginner or an experienced coder seeking to expand
                            your knowledge, I tailor my approach to your
                            learning style and goals. From mastering HTML, CSS,
                            and JavaScript to exploring advanced frontend
                            frameworks, I provide the support and mentorship you
                            need to excel in the dynamic world of frontend
                            development.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Monitor.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>Software Development</h3>
                        </div>
                        <p>
                            Transform your vision into reality with my top-notch
                            software development service. As an experienced
                            developer, I can build custom software solutions
                            tailored to your unique needs and requirements. From
                            web applications to mobile apps and enterprise
                            software, I take pride in delivering high-quality,
                            scalable, and reliable products. Collaborate with me
                            through every step of the development process, from
                            ideation and design to testing and deployment. Let
                            me help you turn your ideas into cutting-edge
                            software that drives innovation and enhances user
                            experiences.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Program.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>Programming Languages</h3>
                        </div>
                        <p>
                            Dive into the exciting world of programming
                            languages with my comprehensive learning resources.
                            My service covers a wide range of programming
                            languages. I offer in-depth tutorials and hands-on
                            projects to sharpen your coding skills. Unleash your
                            creativity and problem-solving abilities as you
                            embark on a journey of continuous learning with my
                            programming languages service.
                        </p>
                    </motion.div>

                    <motion.div
                        className={styles.card}
                        variants={item}
                        whileHover={{scale: 1.1}}
                        transition={{
                            type: 'spring',
                            stiffness: 400,
                            damping: 10,
                        }}
                    >
                        <div>
                            <Image
                                src={`${basePath}/assets/Responsive.svg`}
                                width={40}
                                height={40}
                                alt='img'
                            />
                            <h3>power apps and automate</h3>
                        </div>
                        <p>
                            Empower your business with custom apps tailored to
                            your specific needs using Microsoft Power Apps. My
                            Power Apps service allows you to create intuitive
                            and feature-rich applications without the need for
                            extensive coding. Whether you need a productivity
                            tool, a data entry solution, or a customer-facing
                            app, I can build it using the Power Apps platform.
                            Enhance the efficiency and productivity of your
                            organization with personalized applications that
                            streamline processes and unlock new possibilities.
                        </p>
                    </motion.div>
                </motion.main>
            </div>
            <Footer />
        </div>
    );
}

export default Services;
