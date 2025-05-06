import React from 'react';
import { NavLink, useLoaderData } from 'react-router-dom';

const Sidebar = ({categoriesData}) => {

    return (
        <div className=''>
            <div className='flex flex-col p-8 gap-6 shadow-lg'>

            <NavLink to="/" className={({isActive})=>`btn rounded-3xl border-none hover:bg-[#9538E2] hover:text-white ${isActive ? 'bg-[#9538E2] text-white' : 'bg-gray-50 text-black'}`}>All Products</NavLink>

            {
                categoriesData.map((cData)=><NavLink to={`/gadget-categories/${cData.category}`} className={({isActive})=>`btn rounded-3xl border-none hover:bg-[#9538E2] hover:text-white ${isActive ? 'bg-[#9538E2] text-white' : 'bg-gray-50 text-black'}`}key={cData.id}>{cData.category}</NavLink>)
            }

            </div>    
        </div>  

    );
};

export default Sidebar;