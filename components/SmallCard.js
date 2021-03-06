import React from 'react'
import Image from 'next/image'
function SmallCard(props) {
    return (
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200'>
            {/* Left */}
            <div className='relative h-16 w-16'>
                <Image 
                className='rounded-lg'
                src={props.TheImage}
                layout='fill'
                />
            </div>
            {/* Right */}
            <div>
                <h2>{props.TheLocation}</h2>
                <h3 className='text-gray-500'>{props.TheTiming}</h3>
            </div>
        </div>
    )
}

export default SmallCard
