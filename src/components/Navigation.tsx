import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className='fixed w-full flex items-center justify-between h-[50px] px-5 shadow-md text-white bg-gray-500 z-1000'>
      <Link className='font-bold' to='/'>Test exore</Link>
      <span>
        <Link to='/create'>Create</Link>
        <Link to='/products' className='ml-2'>Products</Link>
      </span>
    </nav>
  )
}
