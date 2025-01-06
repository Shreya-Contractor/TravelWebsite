import React from 'react'
import { FaEnvelope, FaMapMarkedAlt, FaPhone } from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-slate-950'>
        <div className='relative h-[400px] bg-cover bg-center'
     style={{backgroundImage : "url('/Imgs/Home_bg.jpg')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center'>
            <h1 className='text-white text-4xl md:text-6xl text-center font-bold mb-4'>Connect with Us for Personalized Travel Experiences</h1>
        </div> 
    </div>
    <div className='container mx-auto px-4 py-12'>
        <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
            <div className='border outline-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold text-white mb-4'>Contact Details</h3>
            <div className='flex items-center mb-4'>
                <FaEnvelope className='text-white mr-2'/>
                <p className='text-white'>info@trailbliss.com</p>
            </div>
            <div className='flex items-center mb-4'>
                <FaPhone  className='text-white mr-2'/>
                <p className='text-white'>+91 944832xxxx </p>
            </div>
            <div className='flex items-center mb-4'>
                <FaMapMarkedAlt  className='text-white mr-2'/>
                <p className='text-white'>Town,City,Country</p>
            </div>
        </div>
        <div className='bg-slate-950 border outline-white rounded-lg shadow-md p-6'>
            <h3 className='text-xl font-bold mb-4 text-white'>Get in touch</h3>
            <form>
                <div className='mb-4'>
                    <label className="block mb-2 text-white" htmlFor='Name'>Name</label>
                    <input className='w-full p-2 border border-slate-600 rounded' type='text'placeholder='Enter Name'/>
                </div>
                <div className='mb-4'>
                    <label className="block mb-2 text-white" htmlFor='Email'>Email</label>
                    <input className='w-full p-2 border border-slate-600 rounded' type='email'placeholder='Enter Email'/>
                </div>
                <div>
                    <label className="block mb-2 text-white" htmlFor='Message'>Message</label>
                    <textarea className='w-full p-2 border border-slate-600 rounded' name='' placeholder="Write message" id=''/>
                </div>
                <button type="submit" className='py-2 px-4 bg-slate-600 text-white rounded'>Send Message</button>
            </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact