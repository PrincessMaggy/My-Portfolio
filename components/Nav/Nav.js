import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './nav.module.css';

function Nav() {
    const router = useRouter();
    const basePath = router.basePath || '';
    return (
        <div className={styles.navContainer}>
            <div>
                <Image
                    src={`${basePath}/assets/Logo.png`}
                    alt='logo'
                    width={30}
                    height={30}
                />
            </div>
            <div className={styles.midNav}>
                <Link href='/' className={styles.linkTag}>
                    Home
                </Link>
                <Link href='/'>About</Link>
                <Link href='/'>Resume</Link>
                <Link href='/'>Portfolio</Link>
                <Link href='/'>Services</Link>
            </div>
            <div>Contact</div>
        </div>
    );
}

export default Nav;
