import React from 'react';
import Banner from '../Components/Banner';
import Sidebar from '../Components/Sidebar';
import { Outlet, useLoaderData } from 'react-router-dom';

const Home = () => {
    const categoriesData = useLoaderData()
    
    return (
        <div className=''>
        {/* Banner */}
        <Banner></Banner>
        
        {/* heading */}
        <h1 className='text-center text-4xl font-extrabold py-10'>Explore Cutting-Edge Gadgets</h1>
        
        
        {/* home content */}
        <div className='w-11/12 mx-auto flex flex-row gap-8'>

            {/* side bar */}
            <div className='w-1/6'>
            <Sidebar categoriesData={categoriesData}></Sidebar>
            </div>

            {/* Gadget Cards -- dynamic content */}
            <div className='w-5/6'>
            <Outlet></Outlet>
            </div>
            
        </div>

        </div>
    );
};

export default Home;