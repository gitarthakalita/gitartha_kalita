import  Head  from 'next/head';
import React from 'react';

import '../src/styles.scss';
import '../src/styles/main.scss';

export default function App({ Component, pageProps }) {
    return (
        <>
            <Head>
                <title>Gitartha Kalita</title>
            </Head>
            <Component {...pageProps} />
        </>
    )
}