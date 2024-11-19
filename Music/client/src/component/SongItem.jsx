import React, { useContext } from 'react'
import { PlayerContext } from '../context/PlayerContext'

const SongItem = ({name,image,desc,id}) => {

  // Extract playWithId function from context
  const {playWithId} = useContext(PlayerContext)

  return (
    // Handle play with song ID when clicked
    <div onClick={() => playWithId(id)} className='min-w-[180px] p-2 px-3 rounded cursor-pointer 
        hover:bg-[#ffffff26]'>
        
        {/* Display the song image */}
        <img src={image} alt="image" className='rounded '/>
        
        {/* Display the song name */}
        <p className='font-blod mt-2 mb-1'>{name}</p>
        
        {/* Display the song description */}
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default SongItem
