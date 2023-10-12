import React from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Rating from '../components/Rating'
import products from '../products'

const ProductScreen = () => {
  const { productId } = useParams()
  const product = products.find(p => p._id === productId)

  console.log(products[0].name)

  return (
    <div className='px-4 py-1'>
      <Link to='/'
        className='rounded-md text-xs border-2 border-cloud-300 py-1 px-2 bg-cloud-50 text-cloud-900 hover:bg-cloud-100'>
          Back to home
      </Link>
    </div>
  )
}

export default ProductScreen