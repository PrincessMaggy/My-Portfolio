import React from 'react';
import Image from 'next/image';
import styles from './footer.module.css';

function Footer() {
    return (
        <div className='footer'>
            <Image
                src={`${basePath}/assets/Address.svg`}
                width={25}
                height={25}
                alt='img'
            />
            <Image
                src={`${basePath}/assets/Github.svg`}
                width={25}
                height={25}
                alt='img'
            />
            <Image
                src={`${basePath}/assets/Twitter.svg`}
                width={25}
                height={25}
                alt='img'
            />
            <Image
                src={`${basePath}/assets/Linkedin.svg`}
                width={25}
                height={25}
                alt='img'
            />
            <Image
                src={`${basePath}/assets/Telegram.svg`}
                width={25}
                height={25}
                alt='img'
            />
            <Image
                src={`${basePath}/assets/Email.svg`}
                width={25}
                height={25}
                alt='img'
            />
        </div>
    );
}

export default Footer;
