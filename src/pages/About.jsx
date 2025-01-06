import React from 'react'

const About = () => {
  return (
        <div className='bg-slate-950'>
        <div className='relative h-[400px] bg-cover bg-center'
     style={{backgroundImage : "url('/Imgs/Home_bg.jpg')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center'>
            <h1 className='text-white text-4xl md:text-6xl text-center font-bold mb-4'>Our Journey: Connecting You to the Heart of India</h1>
        </div> 
    </div>
    <div className='container mx-auto px-4 py-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='flex items-center justify-center'>
                <img src='/Imgs/Home_bg.jpg'alt='About Us' 
                className='rounded-lg shadow-md w-full h-[600px]' />
            </div>
            <div className='flex flex-col justify-center'>
                <h3 className='text-white text-2xl font-bold mb-4'>Who We Are</h3>
                <p className='text-slate-600 mb-4'>We are passionate travel agency committed to providing the best travel experience for our clients. Our team of dedicated professionals work tirelessly to ensure your trips are seamless and unforegettable.
                </p>
                <h3 className='text-white text-2xl font-bold mb-4'>Our Mission</h3>
            <p className='text-slate-600 mb-4'>Our Mission is to create amazing travel experiences that inspire and enrich the lives of our clients. We believe in personalized service, attention to detail, and providing exceptional value.</p>
            </div>
            
        </div>
    </div>
    </div>
  )
}

export default About