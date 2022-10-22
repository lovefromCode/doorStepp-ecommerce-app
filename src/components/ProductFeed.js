import React from 'react'
import Product from './Product'

function ProductFeed({ products }) {
  console.log(products);
  return (
    <div className='bg-[#EAEDED]'>
      {
        products.map(product =>
          <Product
            key={product.id}
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