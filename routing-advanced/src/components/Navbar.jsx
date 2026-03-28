import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-between px-8 py-4 bg-cyan-800'>
          <h3 className='font-bold text-xl'>Org name</h3>
          <div className='flex gap-6'>
              <Link to='/'>Home</Link>
              <Link to='/about'>About</Link>
              <Link to='/product'>Product</Link>
          </div>
    </div>
  )
}

export default Navbar
