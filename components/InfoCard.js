import React from 'react'
import Image from 'next/image'
import { HeartIcon, StarIcon } from '@heroicons/react/solid'

export default function InfoCard({img,location,title,description,star,price,total}) {
    return (
        <div className='flex py-7 px-2 border-b cursor-pointer hover:opacity-80 hover:shadow-lg pr-4 transition duration-200 ease-out first:border-t'>
            <div className='relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0'>
                <Image src={img}
                className='rounded-lg'
                layout='fill'
                objectFit='cover'/>
            </div>
            <div className='flex flex-col flex-grow pl-5'>
                <div className='flex justify-between'>
                    <p>{location}</p>
                    <HeartIcon className='h-7 cursor-pointer'/>
                </div>

                <h4 className='text-xl'>{title}</h4>
                
                <div className='border-b w-10 pt-2'/>

                <p className='pt-2 text-sm text-gray-500 flex-grow'>{description}</p>

                <div className='flex justify-between'>
                <p className='flex items-center'>
                    <StarIcon className='h-5 text-red-500 '/>
                    {star}
                </p>
                <div className=''>
                    <p className='text-lg font-semibold pb-2 lg:text-xl'>{price}</p>
                    <p className='text-right font-extralight'>{total}</p>
                </div>
                </div>
            </div>
        </div>
    )
}
