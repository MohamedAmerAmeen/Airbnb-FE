import React from 'react'
import Image from 'next/image'

function MediumCard(props) {
    return (
        <div className='rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform ease-out duration-200'>
            {/* Left */}
            <div className='relative h-80 w-80'>
                <Image 
                className='rounded-lg'
                src={props.TheImage}
                layout='fill'
                />
            </div>
            {/* Right */}
            <div>
                <h2 className='text-2xl mt-3'>{props.TheTitle}</h2>
            </div>
        </div>
    )
}

export default MediumCard
