import React from 'react';
import Image from 'next/image';

function CartSection() {
  return (
    <div className='flex flex-col item-center'>
      <div>Cart</div>
      <div>
        Item Name, price count
      </div>
      <div> total count</div>
      <div> checkout button </div>
    </div>
  )
}

export default CartSection