import React from 'react'
import { assets } from '../assets/assets'
import {useNavigate} from 'react-router-dom';

export default function Sidebar() {
  const navigate = useNavigate();
  return (
    <div className='w-[25%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex'>
      
      {/* First Box: Home and Search */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={()=>navigate('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.home_icon} alt="home" className='w-6' />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.search_icon} alt="search" className='w-6' />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* Second Box: Library and Playlists */}
      <div className='bg-[#121212] h-[75%] rounded flex flex-col'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="library" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img src={assets.arrow_icon} alt='arrow' className='w-4 cursor-pointer' />
            <img src={assets.plus_icon} alt='plus' className='w-4 cursor-pointer' />
          </div>
        </div>

        {/* Playlist Section */}
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1'>
          <h1>Create your first playlist</h1>
          <p className='font-light'>It's easy, we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create Playlist
          </button>
        </div>

        {/* Podcast Section */}
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 mt-4'>
          <h1>Let's find some podcasts to follow</h1>
          <p className='font-light'>We'll keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse podcasts
          </button>
        </div>
      </div>
    </div>
  )
}