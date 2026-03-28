import React from 'react'
import { Link } from 'react-router-dom'

const Product = () => {
  return (
    <div>
          <div className='flex justify-center p-4 gap-10'>
              <Link className='font-semibold text-xl' to='/product/men'>Men</Link>
              <Link className='font-semibold text-xl' to='/product/women'>Women</Link>
      </div>
    </div>
  )
}

export default Product
