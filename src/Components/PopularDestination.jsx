import React from 'react'

const PopularDestination = () => {
    const destinations = [
        {
            image: 'Imgs/destination_1.jpg',
            title:'Jaipur',
            description:'The "Pink City" of India, is a stunning blend of royal history and vibrant culture',
        },
        {
            image: 'Imgs/destination_2.jpg',
            title:'TamilNadu',
            description:'Tamil Nadu, known for its rich cultural heritage, ancient temples, classical dance forms, and beautiful coastline, is a vibrant state in southern India.',
        },
        {
            image: 'Imgs/destination_3.jpg',
            title:'Kerela',
            description:' The "God\'s Own Country," is a tropical paradise with serene backwaters, lush landscapes, vibrant culture, and pristine beaches',
        },
        {
            image: 'Imgs/destination_4.jpg',
            title:'Ladakh',
            description:'A breathtaking region in the Himalayas, is known for its stunning landscapes, rugged mountains, vibrant monasteries, and serene high-altitude lakes.',
        },
        {
            image: 'Imgs/destination_5.jpg',
            title:'Varanasi',
            description:'One of the world\'s oldest cities, is a spiritual hub famous for its sacred ghats, vibrant culture, and deep connection to Hindu traditions.',
        },
        {
            image: 'Imgs/destination_6.jpg',
            title:'Assam',
            description:' Known for its lush tea gardens, rich biodiversity, and the mighty Brahmaputra River, is a tranquil paradise in northeastern India.',
        },
        {
            image: 'Imgs/destination_7.jpg',
            title:'Gujarat',
            description:'Gujarat, a vibrant state in western India, is known for its rich cultural heritage, diverse landscapes, historic sites, and the famous Rann of Kutch.',
        },
        {
            image: 'Imgs/destination_8.jpg',
            title:'Shillong',
            description:'Shillong, the "Scotland of the East," is a picturesque hill station in Meghalaya, known for its lush landscapes, waterfalls, and vibrant culture.',
        },

    ]
  return (
    <div className='py-12 bg-gray-950 bg-opacity-98'>
        <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-8 text-white'>Popular Destinations</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.map((city,index) =>(
                    <div key={index} className='bg-gray-900 rounded-xl shadow-md overflow-hidden cursor-pointer bg-opacity-75'>
                        <img src={city.image} alt={city.title} className='w-full h-60 object-cover
                        transform transistion duration-300 hover:scale-110' />
                        <div className='p-4'>
                            <h3 className='text-xl font-bold mb-2 text-white'>{city.title}</h3>
                            <p className='text-zinc-400'>{city.description}</p>
                            </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default PopularDestination