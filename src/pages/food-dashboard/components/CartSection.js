import React from 'react';
import Image from 'next/image';

function CartSection() {
  return (
    <div className='hidden md:flex flex-col py-5' style={{ width: '400px' }}>
      <div className='font-bold text-2xl text-gray-800 py-3'>Cart</div>
      {/* Item name, count and price */}
      <div className='py-3 flex justify-between item-center pr-4 pl-2'>
        <div className='text-sm text-gray-700'>Item name</div>
        <div className='text-sm text-gray-500'>
          Rs. 400
        </div>
        <div className='flex justify-between item-center border-solid border-2 border-green-800 w-16 h-12'>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H3.75A.75.75 0 013 10z" clipRule="evenodd" />
            </svg>
          </button>
          <span className='text-sm'> 2 </span>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
              <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
            </svg>

          </button>
        </div>
      </div>
      {/* Subtotal */}
      <div className='flex flex-col justify-between item-center py-4'>
        <div className='flex justify-between item-center text-md font-bold px-4'>
          <span>Subtotal</span>
          <span>2300</span>
        </div>
        <div className='text-xs text-gray-400 px-4'>Extra charges may apply</div>
      </div>
      {/* Checkout button */}
      <div className='flex justify-center cursor-pointer bg-green-600 text-white text-bold py-2 mr-2 mt-2'>
        <span> CHECKOUT </span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-4 h-4 mt-1">
          <path fill-rule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clip-rule="evenodd" />
        </svg>
      </div>
    </div>
  )
}

export default CartSection