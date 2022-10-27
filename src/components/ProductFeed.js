import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  return (
    <div className='bg-[#EAEDED] max-w-screen-2xl mx-auto'>
      {
        products.map(product =>
          <Product
            key={product.id}
            id={product.id}
            category={product.category}
            description={product.description}
            price={product.price}
            title={product.title}
            rating={product.rating}
            image={product.image}
          />
        )
      }
    </div>
  )
}

export default ProductFeed

//!!!!  max-w-screen-2xl mx-auto --- for making responsive