import React from 'react'

const SuperContainer = ({children}) => {
  return (
    <div className='w-screen h-screen overflow-hidden pl-10 pb-45 pr-10 pt-24'>{children}</div>
  )
}

export default SuperContainer