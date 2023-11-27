import React from 'react';
import { FaSearch, FaRegUserCircle } from 'react-icons/fa';

const Header = () => {
  return (
    <>
    <nav>
        <div className='flex justify-evenly items-center bg-gray-200 p-4'>
            <h1 className='text-2xl font-semibold text-gray-500'>Tushar<span className='text-gray-700'>Estate</span></h1>
            <form>
               <div className='relative'>
               <input type="text" placeholder='Search...' className='rounded-lg pl-2 outline-none py-2 px-16' />
               <FaSearch className='absolute top-0 right-0 mt-3 mr-2'/>
               </div>
            </form>
            <div>
              <ul className='flex flex-row justify-center items-center gap-4 text-lg font-semibold'>
                <li className='cursor-pointer hover:text-gray-600 hover:underline transition '>Home</li>
                <li className='cursor-pointer hover:text-gray-600 hover:underline transition '>About</li>
                <li className='cursor-pointer hover:text-gray-600 hover:underline transition '>Sign-In</li>
                <div className='rounded-full bg-gray-200 cursor-pointer p-2'>
                  <FaRegUserCircle className='text-2xl'/>
                </div>
              </ul>
            </div>
        </div>
    </nav>
    </>
  )
}

export default Header
