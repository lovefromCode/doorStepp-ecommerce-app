import React, { useState, useEffect, useContext } from 'react';
import { GlobalContextObj } from "../context/globalContext";
import { useRouter } from 'next/router';

function Subtotal() {
  const { cartItems } = useContext(GlobalContextObj);
  const router = useRouter()

  const add = () => {
    let ans = 0;
    cartItems.forEach(x => {
      ans += x.price
    })
    return ans
  }
  return (
    <>
      {cartItems.length > 0 && (
        <div className='flex flex-col items-center md:items-start md:mr-5 space-y-1 py-10'>
          <p className='font-medium text-xl'>Subtotal</p>
          <div className='flex justify-start space-x-6'>
            <span>({cartItems.length} items)</span>
            <span>$ {add()}</span>
          </div>
          <button
            onClick={() => {
              router.push("/checkout")
            }}
            className='bg-yellow-400 w-[25rem] md:w-[20rem]'
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </>
  )
}

export default Subtotal