import {useRouter} from 'next/router';
import React from 'react';
import Nav from '../../components/Nav/Nav';
import Footer from '../../components/Footer/Footer';
import styles from '../styles/Services.module.scss';

function Services() {
    const router = useRouter();
    const basePath = router.basePath || '';
    const rootStyles = `url(${basePath}/assets/Background.png), #323540 50% / cover no-repeat`;

    return (
        <div>
            <Nav />
            <div
                className={styles.servicesMain}
                style={{background: rootStyles}}
            >
                services
            </div>
            <Footer />
        </div>
    );
}

export default Services;
