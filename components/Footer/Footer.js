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
            </a>{' '}
        </div>
    );
}

export default Footer;
