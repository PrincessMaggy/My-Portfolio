import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Resume.module.scss';
import {useRouter} from 'next/router';

function Resume() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;
    return (
        <div className={styles.resumeContainer}>
            <Nav />
            <main
                className={styles.resumeMain}
                style={{background: rootStyles}}
            >
                resume
            </main>
            <Footer />
        </div>
    );
}

export default Resume;
