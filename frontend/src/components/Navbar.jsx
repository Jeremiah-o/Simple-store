import React from 'react'
import { Link } from 'react-router'
import { PlusSquareIcon } from 'lucide-react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  return (
    <div className='flex justify-between max-h-5 max-w-[80vw] mx-auto'>
        <Link to={"/"}>
          <span>
            <h1 className=' text-3xl font-bold bg-gradient-to-r from-blue-200 via-blue-400 to-blue-600 bg-clip-text text-transparent'>PRODUCT STORE 🛒</h1>
          </span>
        </Link>
        <div className='flex gap-2'>
            <Link to={"/create"}>
             <button className='btn'><PlusSquareIcon className='w-6 h-6'/></button>
            </Link>
            <button className='btn'>
                <ThemeToggle/>
            </button>
        </div>  
    </div>
  )
}

export default Navbar