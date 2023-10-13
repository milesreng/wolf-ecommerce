/* eslint-disable react/prop-types */
import React from 'react'

const Message = ({ variant, children }) => {
  return (
    <div>
      {variant === 'danger' && (
        <div role='alert'>
          <div className='bg-red-500 text-white font-bold rounded-t px-4 py-2'>
            Alert
          </div>
          <div className='border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700'>
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