import React, { useState } from 'react';
import {FaTimes,FaBars} from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Navbar = () => {
    const [isOpen,setIsOpen] = useState(false);
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg text-white rounded-3xl z-50 bg-opacity-50 bg-black'>
        <div className='container px-4 flex justify-between items-center h-16'>
            <h3 className='text-2xl font-bold'>TrailBliss India.</h3>
            <div className='hidden md:flex space-x-4 text-sm font-semibold items-center'>
                <Link to='/' className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Home</Link>
                <Link to="/gallery" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Gallery</Link>
                <Link to="/contact" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Contact</Link>
                <Link to="/about" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">About</Link>
                <button className='py-2 px-6 border bg-slate-950'>Login</button>
            </div>
            <div className='md:hidden'>
               <button onClick={() =>setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
               </button>
            </div>
        </div>
        {isOpen && (
             <div className='md:hidden flex  space-y-6 py-4  flex-col bg-slate bg-opacity-95 items-center'>
             <Link to='/' className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Home</Link>
             <Link to="/gallery" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Gallery</Link>
             <Link to="/contact" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">Contact</Link>
             <Link to="/about" className="px-6 py-2 hover:bg-slate-950 hover:text-white hover:rounded-lg">About</Link>
             <button className='py-2 px-6 border bg-slate-950 hover:bg-transparent hover:outline-white hover:rounded-lg'>Login</button>
         </div>
        )}
    </nav>
  )
}

export default Navbar;
