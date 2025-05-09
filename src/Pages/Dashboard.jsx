import React, { useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {
    useEffect(() => {
        document.title = "Gadget Heaven | Dashboard";
      }, []);
    return (
        <div>
        <div className='bg-[#9538E2] w-11/12 mx-auto text-white text-center pt-14 pb-10 space-y-3'>

        <h1 className='text-4xl font-bold'>Dashboard</h1>
        <p className='w-2/4 mx-auto text-sm font-light text-gray-200'>Ready to Checkout?
Make sure your cart is accurate and complete.
Adjust quantities or remove items if needed.</p>

        <div className='flex justify-center items-center gap-10 py-5'>
        <NavLink to="/dashboard/cartItems" className={({isActive})=>`btn rounded-3xl shadow-none px-10 hover:shadow-[0_0_15px_rgba(219,39,119,0.8)] ${isActive ? 'bg-white text-[#9538E2] border-none' : 'bg-[#9538E2] border border-white  text-white'}`}>Cart Items</NavLink>

        <NavLink to="/dashboard/wishlistItems" className={({isActive})=>`btn rounded-3xl shadow-none px-10 hover:shadow-[0_0_15px_rgba(219,39,119,0.8)]  ${isActive ? 'bg-white text-[#9538E2] border-none' : 'bg-[#9538E2] border border-white  text-white'}`}>WishList</NavLink>
        </div>
        
        </div> 



        {/* Outlet */}
        <Outlet></Outlet>


        </div>
    );
};

export default Dashboard;