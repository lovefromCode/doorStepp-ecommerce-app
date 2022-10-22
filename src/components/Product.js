import React from 'react';
import Image from 'next/image';
import { StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';

function Product({
    category,
    description,
    price,
    title,
    rating,
    image,
}) {
    return (
        <div className='relative flex flex-col m-5 bg-white p-10 z-30'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>

            <Image src={image} height={200} width={200} objectFit="contain" />

            <h4 className='mt-5'>{title}</h4>

            <div className='flex justify-between items-center my-3'>
                <div className='flex items-center bg-yellow-300 px-1 rounded-sm'>
                    <StarIcon className='h-4 text-white' />
                    <span className='text-black text-sm pl-1'> {rating.rate}</span>
                </div>
                <div className='flex items-center text-gray-500'>
                    <CurrencyDollarIcon className='h-4' />
                    <span className='text-sm'> {price}</span>
                </div>
            </div>
            <p className='text-sm mb-5'>{description.length > 130 ? description.substring(0, 130)+"..." : description} </p>

            <button className='bg-yellow-500'>Add to basket</button>
        </div>
    )
}

export default Product