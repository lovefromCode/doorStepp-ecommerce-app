import React from 'react'
import Header from '../../components/Header';
import CartFeed from './CartFeed';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='bg-[#EAEDED]'>
      <Header />

      <main className='flex flex-col md:flex-row justify-between max-w-screen-2xl mx-auto'>
        <div className='flex flex-col p-5 space-y-10'>
          <h1 className='text-3xl border-b pb-4'>My Shopping Basket</h1>
          <CartFeed />
        </div>
        <Subtotal />
      </main>
    </div>
  )
}

export default Checkout;