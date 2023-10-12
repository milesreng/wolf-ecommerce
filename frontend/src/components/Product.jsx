/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({ product }) => {
  return (
    <div className='basis-full sm:basis-1/2 md:basis-1/4 lg:basis-1/6 p-2'>
      <div className='p-2 border-2 border-forest-200 rounded-md shadow-lg w-full h-full flex flex-col gap-2 justify-between'>
        <Link to={`/product/${product._id}`}>
          <img src={product.image} alt={product.name} />
        </Link>
        <div className='basis-1/3 md:basis-1/6'>
          <Link to={`/product/${product._id}`}
            className='font-bold text-md lg:text-sm'>
            {product.name}
          </Link>
        </div>
        <Rating value={product.rating} text={`${product.numReviews} reviews`}/>
        <div className='text-sm text-cloud-600'>
        ${product.price}
        </div>
      </div>
      
    </div>
  )
}

export default Product