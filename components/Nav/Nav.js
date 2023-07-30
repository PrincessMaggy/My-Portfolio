import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {useRouter} from 'next/router';
import styles from './nav.module.css';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';

function Nav() {
    const [menu, setMenu] = useState(false);

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

    useEffect(() => {
        window.addEventListener('resize', showMenu);
        return () => {
            window.removeEventListener('resize', showMenu);
        };
    });

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
            {menu && (
                <div className={styles.links}>
                    <div className={styles.midNav}>
                        <Link href='/' className={styles.linkTag}>
                            Home
                        </Link>
                        <Link href='/'>About</Link>
                        <Link href='/'>Resume</Link>
                        <Link href='/'>Portfolio</Link>
                        <Link href='/'>Services</Link>
                    </div>
                    <div className={styles.contact}>Contact</div>
                </div>
            )}

            <div className={styles.navIcons}>
                {!menu ? (
                    <AiOutlineMenu color='#ffd600' onClick={handleMenu} />
                ) : (
                    <AiOutlineClose color='#ffd600' onClick={handleMenu} />
                )}
            </div>
        </div>
    );
}

export default Nav;
