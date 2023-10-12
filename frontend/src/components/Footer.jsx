import React from 'react'

export const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <div className='w-full text-center border-t-2 border-forest-900 bg-forest text-forest-50'> 
      <p>WolfShop &copy; {currYear}</p>
    </div>
  )
}