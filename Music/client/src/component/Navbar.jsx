import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom';

function Navbar() { 
  const navigate = useNavigate();
  return (
    <>
        <div className='w-2xl flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={()=>navigate(-1)} src={assets.arrow_left} className='w-4 h-4  cursor-pointer' />
                <img onClick={()=>navigate(+1)} src={assets.arrow_right} className='w-4 h-4  cursor-pointer' />
            </div>
            <div className='flex items-center gap-4'>
                <p className='bg-white text-black text-[15px] px-4
                py-1 rounded-2xl hidden md:block cursor-pointer'>Explore Premium</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Install App</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-2xl flex items-center justify-center'>S</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
                <p className='bg-white text-black px-4 py-1 rounded-2xl cursor-pointer'>All</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Music</p>
                <p className='bg-black px-4 py-1 rounded-2xl cursor-pointer'>Podcaste</p>
        </div>
    </>
  )
}

export default Navbar;