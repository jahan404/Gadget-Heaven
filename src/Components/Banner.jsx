import React from 'react';
import bannerImg from '../assets/banner.jpg'
const Banner = () => {
    return (
       <div className='relative w-11/12 mx-auto p-2 rounded-2xl border my-10 '>
         <div className='bg-[#9538E2] rounded-xl'>

        {/* Navbar */}
          <div className="navbar text-white mb-10">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
              <li><a>Home</a></li>
              <li><a>Statistics</a></li>
              <li><a>Dashboard</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Gadget Heaven</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
              <li><a>Home</a></li>
              <li><a>Statistics</a></li>
              <li><a>Dashboard</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
        
        {/* banner text section*/}
        <div className='text-white text-center w-10/12 mx-auto space-y-4 pb-72'>
        <h1 className='font-bold text-5xl leading-snug'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
        <p className='font-light text-sm w-4/6 mx-auto'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>

        <button className='btn rounded-[32px] text-[#9538E2]'>Shop Now</button>
        </div>

        {/* Banner image */}
        <div className='w-3/5 mx-auto absolute p-3 border rounded-2xl bg-white/30 -bottom-56 right-60'>
        <div>
            <img className='rounded-lg' src={bannerImg} alt="" />
        </div>
        </div>
        </div>
       </div>
    );
};

export default Banner;