import React from 'react'
import { FaPlayCircle } from 'react-icons/fa'

const Heading = ({Heading,title}) => {
  return (
    <div className=' px-6 py-6'>
      <h1 className='text-3xl font-semibold font-Monoton tracking-wider'>{Heading}</h1>
      <p className='text-sm md:text-lg font-semibold text-pretty '>{title}</p>
    </div>
  )
}

export default Heading