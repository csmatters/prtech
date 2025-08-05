import React from 'react'
import { Link } from 'react-router-dom'
import { IoCloseCircleOutline } from "react-icons/io5";

function Mobilemenu({toggle, onClose}) {
  return (
    <div className={`md:hidden fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${toggle ? "translate-x-0" : "translate-x-full"}`}>
        <span className='self-end mt-4'><IoCloseCircleOutline className='text-4xl mt-2 pr-2 text-gray-500' onClick={onClose}/></span>
        <div className='flex flex-col gap-3 pl-4 mt-4'>
            <Link to="/" className='font-semibold'>Home</Link>
            <Link to="/aboutus" className='font-semibold'>About Us</Link>
            <Link to="/services" className='font-semibold'>Services</Link>
            <Link to="/internship" className='font-semibold'>Intrnship Programme</Link>
            <Link to="/contact" className='font-semibold'>Contact</Link>
        </div>
        
    </div>
  )
}

export default Mobilemenu
