import React from 'react'
import {FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell} from 'react-icons/fa';
const Services = () => {
    const services = [
        {
            icon: <FaPlane className='text-4xl text-white'/>,
            title:'Flight Booking',
            description:'We provide easy and quick flight booking services to make your travel hassle-free.',
        },
        {
            icon: <FaHotel className='text-4xl text-white'/>,
            title:'Hotel Booking',
            description:'Best hotels at the best prices with our exclusive deals and discounts. ',
        },
        {
            icon: <FaUmbrellaBeach className='text-4xl text-white'/>,
            title:'Beach Tours',
            description:' Enjoy relaxing beach tours with all-inclusive packages and guided tours.',
        },
        {
            icon: <FaConciergeBell className='text-4xl text-white'/>,
            title:'Concierge Services',
            description:'Get personalized concierge services for a seamless travel experience.',
        },

    ]
  return (
    <div className='py-12 bg-gray-950 bg-opacity-98'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8 text-white'>Our Services</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((services,index) =>(
                    <div key={index} className='bg-black border border-white  rounded-xl shadow-md flex flex-col p-8 items-center cursor-pointer 
                    transform transistion duration-300 hover:scale-110'>
                        <div className='mb-4 '>{services.icon}</div>
                        
                            <h3 className='text-xl font-bold mb-2 text-white'>{services.title}</h3>
                            <p className='text-zinc-400'>{services.description}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services;