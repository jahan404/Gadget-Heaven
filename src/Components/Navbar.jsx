import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';
import { BsCart2 } from "react-icons/bs";
import { FiHeart } from "react-icons/fi";

const Navbar = () => {
  const {pathname} = useLocation()
    return (
        <div className={pathname === '/' ? 'navbar text-white bg-purple-900  w-11/12 mx-auto px-6 pt-6 rounded-t-2xl mt-10 ' : 'navbar w-11/12 mx-auto text-[#9538E2] px-6 pt-6 rounded-t-2xl mt-10'}>
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
               <li><NavLink to="/" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Home</NavLink></li>
              <li><NavLink to="/statistics" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Statistics</NavLink></li>
              <li><NavLink to="/dashboard" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Dashboard</NavLink></li>
            </ul>
          </div>
          <a className="font-bold text-2xl">Spark Gadgets</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
              <li><NavLink to="/" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Home</NavLink></li>
              <li><NavLink to="/statistics" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Statistics</NavLink></li>
              <li><NavLink to="/dashboard" className={({isActive})=>`${isActive ? 'bg-black text-white' : ''}`}>Dashboard</NavLink></li>
          </ul>
        </div>

      <div className="navbar-end flex items-center gap-3">

      <Link to="/dashboard/cartItems">
      <div className='bg-white rounded-full p-3 text-black border btn btn-circle'>
        <BsCart2 />
      </div>
      </Link>

      <Link to="/dashboard/wishlistItems">
      <div className='bg-white btn btn-circle rounded-full p-3 text-black border'>
        <FiHeart />
      </div>
      </Link>
      </div>
      
      </div>
    );
};

export default Navbar;