import React from 'react'
import Header from '../../components/Header';
import CheckoutFeed from './CheckoutFeed';
import Subtotal from './Subtotal';

function Checkout() {
  return (
    <div className='bg-[#EAEDED]'>
      <Header />

      <main className='flex justify-between max-w-screen-2xl mx-auto'>
        <div className='flex flex-col p-5 space-y-10'>
          <h1 className='text-3xl border-b pb-4'>My Shopping Basket</h1>
          <CheckoutFeed />
        </div>

        <Subtotal />
      </main>
    </div>
  )
}

export default Checkout;