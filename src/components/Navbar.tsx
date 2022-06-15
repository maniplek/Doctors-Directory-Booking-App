import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    
    <nav className='flex justify-between items-center text-lg p-4 bg-blue-300 m-9 shadow-2xl'>
        <h2 className='text-gray-600'> DOCTOR APOINT</h2>
        <div className='flex justify-between gap-7'>
            <Link className='hover:underline text-gray-600' to='/'>Home</Link>
            <Link className='hover:underline text-gray-600' to='/Admin'>Admin</Link>
            
        </div>
    </nav>
  )
}

export default Navbar