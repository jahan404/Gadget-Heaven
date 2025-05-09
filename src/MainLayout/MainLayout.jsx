import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import ScrollToTop from '../Components/ScrollToTop';
import { Toaster } from 'react-hot-toast';


const MainLayout = () => {
    return (
        <div className='font-title'>
        <Toaster></Toaster>
        <ScrollToTop></ScrollToTop>

        {/* Navbar */}
        <Navbar></Navbar>
         
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