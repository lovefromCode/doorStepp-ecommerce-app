import React, { useState, useEffect, useContext } from 'react';
import Image from 'next/image';
import { StarIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { GlobalContextObj } from "../context/globalContext";

function CheckoutFeed() {
  const { cartItems, globalChangeState } = useContext(GlobalContextObj);
  return (
    <>
      {cartItems.map(item => {
        return (
          <div className='flex py-3'>
            <Image src={item.image} height={160} width={180} objectFit="contain" />

            <div className='ml-6'>
              <h4 className='mt-5 font-medium'>{item.title}</h4>
              <p className='text-sm mt-1 break-all md:mt-3'>{item.description.length > 130 ? item.description.substring(0, 130) + "..." : description} </p>

              <div className='flex justify-start space-x-10 items-center mt-5 md:mt-7'>
                <div className='flex items-center bg-yellow-300 px-1 rounded-sm'>
                  <StarIcon className='h-4 text-white' />
                  <span className='text-black text-sm pl-1'> {item.rating.rate}</span>
                </div>
                <div className='flex items-center text-gray-500'>
                  <CurrencyDollarIcon className='h-4' />
                  <span className='text-sm'> {item.price}</span>
                </div>
                <button className='bg-yellow-400'>Delete item</button>
              </div>
            </div>

          </div>
        )
      })}
    </>
  )
}

export default CheckoutFeed