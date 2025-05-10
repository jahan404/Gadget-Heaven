import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop';
import { Toaster } from 'react-hot-toast';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const MainLayout = () => {
    return (
        <div className='font-title bg-blue-950'>
        <Toaster></Toaster>
        <ScrollToTop></ScrollToTop>

        {/* Navbar */}
        <div className='bg-blue-950 border-t-2 border-blue-950'>
            <Navbar></Navbar>
        </div>
         
        {/* dynamic components */}
        <div>
            <Outlet></Outlet>
        </div>

        {/* Footer */}
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;