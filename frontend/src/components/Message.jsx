/* eslint-disable react/prop-types */
import React from 'react'

const Message = ({ variant, children }) => {
  return (
    <div>
      {variant === 'danger' && (
        <div className='w-fit'>
          <div className='bg-red-500 text-default-bg font-bold rounded-t px-4 py-2'>
            Alert
          </div>
          <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
            {children}
          </div>
        </div>
      )}
      {variant == 'info' && (
        <div className='w-fit'>
          <div className='border border-cloud-400 rounded-md bg-cloud-100 px-4 py-3 text-cloud-700'>
            {children}
          </div>
        </div>
      )}
    </div>
  )
}

Message.defaultProps = {
  variant: 'info'
}

export default Message