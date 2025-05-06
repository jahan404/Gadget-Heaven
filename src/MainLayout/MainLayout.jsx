import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Banner';
import Navbar from '../Components/Navbar';

const MainLayout = () => {
    return (
        <div className='font-title'>
        {/* Navbar */}
        <Navbar></Navbar>
         
        {/* dynamic components */}
        <div className='min-h-[calc(100vh-285px)]'>
            <Outlet></Outlet>
        </div>

        {/* Footer */}
        <Footer></Footer>
        </div>
    );
};

export default MainLayout;