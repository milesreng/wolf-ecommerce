/* eslint-disable react/prop-types */
import React from 'react'

const Product = ({ product }) => {
  return (
    <div className='basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 p-2'>
      <div className='p-2 border-2 border-forest-200 rounded-md shadow-lg w-full h-full flex flex-col gap-2'>
        <a href={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </a>
        <div>
          <a href={`/product/${product._id}`}
            className='font-bold'>
            {product.name}
          </a>
        </div>
        <div>
        ${product.price}
        </div>
      </div>
      
    </div>
  )
}

export default Product