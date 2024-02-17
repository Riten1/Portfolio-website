import React from 'react'

const MainContainer = ({children}) => {
  return (
    <div className='w-full h-full bg-gray-100 overflow-hidden'>{children}</div>
  )
}

export default MainContainer