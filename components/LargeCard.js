import React from 'react'
import Image from 'next/image'

function LargeCard(props) {
    return (
        <div className='relative py-16 cursor-pointer'>
            <div className='relative h-96 min-w-[300px]'>
                <Image src={props.TheImage} 
                layout='fill'
                objectFit='cover'
                className='rounded-2xl'/>
            </div>
                <div className='absolute top-32 left-12'>
                    <h3 className='text-4xl mb-3 w-64'>The greatest out door</h3>
                    <p>Wishlists curated by airbnb</p>
                    <button className='text-sm text-white bg-gra bg-gray-900 px-4 py-2 rounded-lg mt-5'>Get inspired</button>
            </div>
        </div>
    )
}

export default LargeCard
