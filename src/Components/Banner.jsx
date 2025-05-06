import React from 'react';
import bannerImg from '../assets/banner.jpg'
import { Outlet, useNavigate } from 'react-router-dom';

const Banner = () => {
    const navigate = useNavigate()
    return (
       
        <div className='relative w-11/12 mx-auto p-2 rounded-b-2xl bg-[#9538E2] mb-80'> 
        {/* banner text section*/}
        <div className='text-white text-center w-10/12 mx-auto space-y-4 pb-48'> 
        <h1 className='font-bold text-5xl leading-snug'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='font-light text-sm w-4/6 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

        <button onClick={()=>navigate('/dashboard')} className='btn rounded-[32px] text-[#9538E2]'>Shop Now</button>
        </div>

        {/* Banner image */}
        <div className='h-[450px] w-[850px] mx-auto absolute p-5 border rounded-2xl bg-white/30 top-72 right-48'>
            <img className='rounded-lg h-full w-full object-cover' src={bannerImg} alt="" />
        </div>

        

       </div>
    );
};

export default Banner;