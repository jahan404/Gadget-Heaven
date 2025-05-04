import React from 'react';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router-dom';
import Banner from '../Components/Banner';

const MainLayout = () => {
    return (
        <div className='font-title'>
        {/* Banner */}
        <Banner></Banner>

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