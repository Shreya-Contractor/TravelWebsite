import React from 'react'
const testimonials = [
    {
        image: '/Imgs/profile_1.jpg',
        name:'Alice Doe',
        text:'"An Unforgettable Experience!" "I had an amazing trip to TamilNadu with this travel agency. The team was incredibly helpful in planning every detail, from transportation to accommodations, and made sure everything went smoothly. Highly recommend for anyone looking for a hassle-free travel experience!"',
        location:'New York,USA',
    },
    {
        image: '/Imgs/profile_2.jpg',
        name:'Emily Smith',
        text:'"Perfectly Organized!" "The trip to Kerala was absolutely beautiful! The travel agency took care of every little detail, from the houseboat stay in the backwaters to our tour of tea plantations. It was a memorable experience, and I will definitely travel with them again."',
        location:'London,UK',
    },
    {
        image: '/Imgs/profile_3.jpg',
        name:'Punit Joshi',
        text:'"A Journey to Remember!" "Thanks to the expert guidance from this travel agency, our family trip to Shillong was perfect. The itinerary was well-planned, and we got to explore hidden gems while enjoying the local culture. We\'ll definitely book our next vacation with them!"',
        location:'Mumbai',
    },
    {
        image: '/Imgs/profile_4.jpg',
        name:'John & Mario',
        text:'"Seamless & Enjoyable!" "We had a wonderful time exploring Jaipur with this travel agency. The local guide was knowledgeable, and the itinerary was balanced with both sightseeing and leisure time. It was a fantastic experience that I will always cherish!"',
        location:'Sydeny,Australia', 
    },

]
const Testimonials = () => {
    
  return (
    <div className='py-12 bg-gray-950 bg-opacity-98'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8 text-white'>Our Testimonials</h2>
            <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
                {testimonials.map((testimonial,index) =>(
                    <div key={index} className='bg-black border border-white p-6 rounded-xl shadow-md text-center cursor-pointer 
                    transform transistion duration-300 hover:scale-110'>
                        <img src={testimonial.image} alt={testimonial.name} className='w-24 h-24 rounded-full mx-auto mb-4'/>
                        
                            <h3 className='text-xl font-bold mb-2 text-white'>{testimonial.name}</h3>
                            <p className='text-zinc-400 mb-2'>{testimonial.location}</p>
                            <p className='text-zinc-600 italic'>{testimonial.text}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Testimonials;