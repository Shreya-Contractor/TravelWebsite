import React from 'react'

const images = [
    '/Imgs/gallery_1.jpg',
    '/Imgs/gallery_2.jpg',
    '/Imgs/gallery_3.jpg',
    '/Imgs/gallery_4.jpg',
    '/Imgs/gallery_5.jpg',
    '/Imgs/gallery_6.jpg',
    '/Imgs/gallery_7.jpg',
    '/Imgs/destination_4.jpg',
]
const Gallery = () => {
  return (
    <div className='bg-slate-950'>
        <div className='relative h-[400px] bg-cover bg-center'
     style={{backgroundImage : "url('/Imgs/Home_bg.jpg')"}}>
        <div className='absolute inset-0 bg-black bg-opacity-55 flex flex-col items-center justify-center'>
            <h1 className='text-white text-4xl md:text-6xl text-center font-bold mb-4'>A Glimpse of India's Rich Heritage</h1>
        </div> 
    </div>
    <div className=' container bg-slate-950 mx-auto px-4 py-12'>
        <div className='grid gap-8 grid-cols-1 md:grid cols-3 lg:grid-cols-4'>
        {images.map((image, index) => (
    <div
        key={image}
        className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105'
    >
        <img src={image} alt='' className='w-full h-[500px] object-cover' />
    </div>
))}

        </div>
    </div>
    </div>
  )
}

export default Gallery