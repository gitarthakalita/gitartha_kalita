
import Footer from '../Footer/Footer';

import Navbar from '../Navbar/Navbar';


const Layout = ({ title = 'Gitartha Kalita', children }) => {



    return (
        <div>
          
            <Navbar />
            {children}
            <Footer/>
        </div>
    )
}

export default Layout;
