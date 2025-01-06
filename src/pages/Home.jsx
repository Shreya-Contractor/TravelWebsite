import React from 'react'
import PopularDestination from '../Components/PopularDestination';
import Services from '../Components/Services';
import Testimonials from '../Components/Testimonials';

const Home = () => {
    const home_img = '/Imgs/Home_bg.jpg';
  return (
    <>
    <div className='relative h-screen bg-cover bg-center'
     style={{backgroundImage : `url(${home_img})`}}>
        <div className='absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center'>
            <h1 className='text-white text-4xl md:text-6xl text-center font-bold mb-4'>Embark on a Journey to Explore India with Us!</h1>
            <p className='text-lg md:text-2xl text-white mb-8'>Discover amazing places at exculsive deals</p>
            <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-black transform transistion duration-300 hover:scale-105 '>Get Started</button>
        </div>
    </div>
    <PopularDestination />
    <Services />
    <Testimonials />
    </>
  )
}

export default Home