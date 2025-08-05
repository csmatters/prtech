import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { MdPhone } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineEmail } from "react-icons/md";
import { MdAccessTime } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import logo from "../assets/images/PR_Tech-main-logo.png"
import { RiMenu3Fill } from "react-icons/ri";
import Mobilemenu from './mobilemenu';


function Header() {

  const [menuToggle, setMenuToggle] = useState(false);
  
  const toggleMenu = (e) => {
    e.preventDefault();
    setMenuToggle(!menuToggle);
  }

  const handleCloseMenu = (e) => {
    e.preventDefault();
    setMenuToggle(false);
  }

  return (
    <header className=''>
        <div className='bg-gray-950'>
            <div className='container mx-auto'>
                <div className='px-2 md:px-0 flex flex-row items-center justify-between py-2'>
                    <div className='flex flex-row items-center gap-6'>
                        <div className='hidden md:flex items-center'><MdAccessTime  className='text-gray-500 size-4.5'/><span className='text-gray-500 text-sm '> &nbsp; Morning 09:00AM to 06:00PM</span></div>
                        <div className='hidden md:flex items-center'><MdOutlineEmail className='text-gray-500 size-4.5'/><span className='text-gray-500 text-sm'> &nbsp; info@prtechpvt.com</span></div>
                        <div className='hidden md:flex items-center'><HiOutlineLocationMarker className='text-gray-500 size-4.5'/> <span className='text-gray-500 text-sm'> &nbsp;Prem Nagar, Itwari Road Nagpour 440002</span></div>
                        <div className='flex items-center md:hidden'> 
                            <span className='p-1 rounded-full bg-black'>
                                <MdPhone className='text-1xl text-white'/>
                            </span> &nbsp;&nbsp; 
                            <span className='font-semibold text-gray-300'> +91 - 866 876 9915</span>
                        </div>
                    </div>
                    <div className='text-end flex flex-row gap-3'>
                        <PiInstagramLogoFill className='text-2xl text-gray-500'/>
                        <IoLogoYoutube className='text-2xl text-gray-500' />
                    </div>
                </div>
            </div>
        </div>
        <div className='container mx-auto'>
            <div className='flex flex-row items-center py-3 justify-between px-2 md:px-0'>
                <div className='logo'>
                    <a href='/'><img src={logo} className='w-[200px]' /> </a>
                </div>
                <div className='md:hidden'>
                    <RiMenu3Fill className="text-2xl" onClick={toggleMenu}/>
                </div>
                <div className='menus hidden md:flex flex-row gap-10 mx-auto'>
                    <Link to="/" className='font-semibold'>Home</Link>
                    <Link to="/aboutus" className='font-semibold'>About Us</Link>
                    <Link to="/services" className='font-semibold'>Services</Link>
                    <Link to="/internship" className='font-semibold'>Internship Programme</Link>
                    <Link to="/contact" className='font-semibold'>Contact</Link>
                </div>
                <div className='hidden contact md:flex gap-10'>
                    <p className='flex items-center'> 
                        <span className='p-1 rounded-full bg-black'>
                            <MdPhone className='text-1xl text-white'/>
                        </span> &nbsp;&nbsp;
                        <span className='font-semibold'> +91 - 866 855 9558</span>
                    </p>
                </div>
            </div>
        </div>
        <Mobilemenu toggle={menuToggle} onClose={handleCloseMenu}/>
    </header>
  )
}

export default Header