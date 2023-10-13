import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { useGetProductDetailsQuery } from '../slices/productsApiSlice'
import Rating from '../components/Rating'

const ProductScreen = () => {
  const { id: productId } = useParams()
  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId)
  
  return (
    <div className='px-4 py-1 w-screen'>
      <Link to='/'
        className='rounded-md text-sm border-2 border-cloud-300 py-1 px-2 bg-cloud-50 text-cloud-900 hover:bg-cloud-100 my-4'>
          Back to home
      </Link>
      {isLoading && !error && (
        <h1>Loading...</h1>
      )}
      {error && <p>{error?.data?.message || error.error}</p>}
      {!isLoading && !error && (
        <div className='flex flex-col md:flex-row justify-between pt-8 w-11/12 mx-auto gap-4 md:gap-0'>
          <div className='basis-full md:basis-2/3'>
            <img src={product.image} alt={product.name} 
              className='overflow-hidden w-11/12 rounded-md border-cloud-50 border-2 mx-auto'/>
          </div>
          <div className='basis-full md:basis-1/2 px-4 gap-2 flex flex-col'>
            <h3 className='text-xl md:text-2xl border-b-2 border-forest-200 pb-2 w-full md:w-11/12'>{product.name}</h3>
            <div className='border-b-2 border-forest-200 pb-2 w-full md:w-11/12' >
              <Rating value={product.rating} text={`${product.numReviews} reviews`} />
            </div>
            <p>Price: ${product.price}</p>
            <p className='text-sm w-full md:w-11/12'>{product.description}</p>
          </div>
          <div className='basis-1/4 md:border-2 rounded-md text-center border-forest-50 md:shadow-lg p-2 h-1/4 flex flex-row md:flex-col gap-2 md:gap-4 justify-between'>
            <p className='hidden md:block md:border-b-2 md:border-forest-50 pb-2'>Price: ${product.price}</p>
            <h3 className='text-sm my-auto'>Status: 
              <strong> {product.countInStock > 0 ? 
                <span className='text-forest'>in stock</span> : 
                <span className='text-brick'>out of stock</span>}
              </strong>
            </h3>
            <button className={`rounded-md border-forest-500 bg-forest-50 border-2 text-xs px-2 py-1 w-1/4 md:w-full lg:w-2/3 md:mx-auto hover:bg-forest-100 transition-all duration-200 ${product.countInStock === 0 ? 'opacity-50' : 'opacity-100'}`}
              type=''
              disabled={product.countInStock === 0}>
            Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductScreen