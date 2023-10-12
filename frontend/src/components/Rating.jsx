/* eslint-disable react/prop-types */
import React from 'react'
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa'

const Rating = ({ value, text }) => {
  return (
    <div className='flex flex-row gap-2'>
      <div className='flex flex-row my-auto text-forest-600 text-sm lg:text-md'>
        <span>
          { value >= 1 ? <FaStar /> : value >= 0.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
          { value >= 2 ? <FaStar /> : value >= 1.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
          { value >= 3 ? <FaStar /> : value >= 2.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
          { value >= 4 ? <FaStar /> : value >= 3.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
        <span>
          { value >= 5 ? <FaStar /> : value >= 4.5 ? <FaStarHalfAlt /> : <FaRegStar />}
        </span>
      </div>
      
      <span className='my-auto text-xs lg:text-sm'>{ text && text }</span>
    </div>
  )
}

export default Rating