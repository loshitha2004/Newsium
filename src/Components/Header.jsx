import React from 'react'
import  { Link } from 'react-router-dom'
const Header = () => {
  return (
    <div className='h-16 font-Poppins bg-Primary flex items-center justify-between sticky top-0'>
      <div className='text-white px-2'>
        <p>LOGO</p>
      </div>
      <div className='text-white hidden md:block'>
         <Link to="/" className='px-2'>Technology</Link>
         <Link to="anime" className='px-2'>Anime</Link>
         <Link to="space" className='px-2'>Space</Link>
         <Link to="buisness" className='px-2'>Buisness</Link>
         <Link to="stock" className='px-2'>Stock</Link>
      </div>
    </div>
  )
}

export default Header