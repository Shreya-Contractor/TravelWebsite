import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='bg-gray-950 p-4 text-white bg-opacity-98'>
        <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
                <h2 className='text-2xl font-bold mb-4'>TrailBliss India.</h2>
                <p className='mb-4'>Your trusted partner for Unforgettable travel experience. Explore India's rich culture and heritage of India with us.</p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h2 className='text-lg font-semibold'>Quick Links</h2>
                <div className='flex flex-col mt-4 space-y-2'>
                    <Link to='/'>Home</Link>
                    <Link to='/gallery'>Gallery</Link>
                    <Link to='/contact'>Contact</Link>
                    <Link to='/about'>About</Link>
                </div>
            </div>
            <div>
                <h3 className='text-xl font-bold mb-4'>Follow Us</h3>
                <div className='flex space-x-4 mb-4'>
                    <FaFacebookF size={24} className='text-white hover:text-slate-600'/>
                    <FaInstagram size={24} className='text-white hover:text-slate-600'/>
                    <FaTwitter  size={24} className='text-white hover:text-slate-600'/>
                    <FaYoutube  size={24} className='text-white hover:text-slate-600' />
                </div>
                <form className='flex items-center justify-center mt-8'>
                    <input type='email' placeholder='Your Email' 
                    className='w-full p-2 rounded-l-lg bg-transparent outline-slate-600 border'/>
                    <button className='bg-slate-600 text-white px-4 py-2 rounded-r-lg border border-white'>Subscribe</button>
                </form>
            </div>
        </div>
        <div className='flex justify-between border-t border-slate-600 pt-4'>
            <p >&copy; 2025 TrailBliss India. All rights reserved. </p>
            <div className='flex space-x-4 mt-4 md:mt-0'>
                <Link to="">Privacy Policy</Link>
                <Link to="">Terms of Service</Link>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer