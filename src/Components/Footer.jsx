import React from 'react';

const Footer = () => {
    return (
        <div className='bg-base-200'>
  
  <h1 className='font-bold text-3xl text-center pt-10 pb-2'>Gadget Heaven</h1>
  <p className='font-extralight text-sm text-center pb-10 border-b w-11/12 mx-auto'>Leading the way in cutting-edge technology and innovation.</p>
  <footer className="footer  text-base-content p-10 flex justify-around w-8/12 mx-auto">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
  
</footer>
        </div>
    );
};

export default Footer;