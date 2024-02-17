import React from 'react'

const SuperContainer = ({children}) => {
  return (
    <div className='w-screen h-screen overflow-hidden pl-10 pb-11 pr-10'>{children}</div>
  )
}

export default SuperContainer