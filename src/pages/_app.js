// _app.js
import React from 'react';
import '@/styles/globals.css';
import {useRouter} from 'next/router'; // Import useRouter from next/router

export default function App({Component, pageProps}) {
    const router = useRouter(); // Get the router object
    React.useEffect(() => {
        const handleRouteChange = () => {
            window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        };

        // Add the event listener for route changes
        router.events.on('routeChangeComplete', handleRouteChange);

        // Remove the event listener when the component is unmounted
        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return <Component {...pageProps} />;
}
