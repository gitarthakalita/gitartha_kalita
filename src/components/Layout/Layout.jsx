import Head from 'next/head'
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';


const Layout = ({ title = 'Gitartha Kalita', children }) => {



    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
