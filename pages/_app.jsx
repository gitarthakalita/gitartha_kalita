import React from 'react';

import '../src/styles.scss';
import '../src/styles/main.scss';

export default function App ({Component, pageProps}){
    return <Component {...pageProps}/>
}