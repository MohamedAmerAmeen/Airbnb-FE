import React from 'react'
import Image from 'next/image'
function Banner() {
    return (
        <div className='relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'>
            <Image
            src='http://links.papareact.com/0fm'
            layout='fill'
            objectFit='cover'/>

            <div className='absolute top-1/2 w-full text-center'>
                <p className='text-sm sm:text-lg '>Not sure where to go? Perfect.</p>
                <button className='bg-white text-purple-600 shadow-md my-3 hover:shadow-lg active:scale-90 translate duration-150 px-10 py-4 rounded-full'>I'm Flexiable</button>
            </div>
        </div>
    )
}

export default Banner
