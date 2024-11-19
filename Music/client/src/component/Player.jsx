import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../context/PlayerContext'

const Player = () => {

  // Destructure values from PlayerContext
  const {seekBar, seekBg, playStatus, play, pause, track, time, previous, next,seekSong} = useContext(PlayerContext)

  return (
    // Main player container with styling
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4 mt-10'>
      
      {/* Left Section: Song Info */}
      <div className='hidden lg:flex items-center gap-4'>
        {/* Display song cover image */}
        <img src={track.image} alt="Song Cover" className='w-12' />
        <div>
          {/* Show track name and description */}
          <p className='font-semibold'>{track.name}</p>
          <p className='text-sm opacity-75'>{track.desc.slice(0, 12)}</p>
        </div>
      </div>

      {/* Center Section: Player Controls */}
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-3'>
          {/* Shuffle button */}
          <img src={assets.shuffle_icon} alt="shuffle" className='w-4 cursor-pointer' />
          {/* Previous track button */}
          <img onClick={previous} src={assets.prev_icon} alt="previous" className='w-4 cursor-pointer' />
          
          {/* Play/Pause button depending on playStatus */}
          {playStatus 
            ? <img onClick={pause} src={assets.pause_icon} alt="pause" className='w-4 cursor-pointer' /> 
            : <img onClick={play} src={assets.play_icon} alt="play" className='w-4 cursor-pointer' />
          }
          
          {/* Next track button */}
          <img onClick={next} src={assets.next_icon} alt="next" className='w-4 cursor-pointer' />
          {/* Loop button */}
          <img src={assets.loop_icon} alt="loop" className='w-4 cursor-pointer' />
        </div>

        {/* Time and Seekbar */}
        <div className='flex items-center gap-5'>
          {/* Current track time */}
          <p className='text-xs'>{time.currentTime.minute}:{time.currentTime.second}</p>
          {/* Seekbar container */}
          <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-600 rounded-full cursor-pointer h-1 relative'>
            <div ref={seekBar} className='absolute bg-green-500 h-1 w-0 rounded-full'></div>
          </div>
          {/* Total track time */}
          <p className='text-xs'>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>

      {/* Right Section: Additional Controls */}
      <div className='hidden lg:flex items-center gap-2 opacity-75'>
        {/* Additional control buttons */}
        <img src={assets.play_icon} alt="play" className='w-4 cursor-pointer' />
        <img src={assets.mic_icon} alt="mic" className='w-4 cursor-pointer' />
        <img src={assets.queue_icon} alt="queue" className='w-4 cursor-pointer' />
        <img src={assets.speaker_icon} alt="speaker" className='w-4 cursor-pointer' />
        <img src={assets.volume_icon} alt="volume" className='w-4 cursor-pointer' />
        {/* Volume bar */}
        <div className='w-20 bg-gray-400 h-1 rounded-full'>
          <div className='bg-green-500 h-1 w-[50%] rounded-full'></div>
        </div>
        {/* Additional icons */}
        <img src={assets.mini_player_icon} alt="mini player" className='w-4 cursor-pointer' />
        <img src={assets.zoom_icon} alt="zoom" className='w-4 cursor-pointer' />
      </div>
    </div>
  )
}

export default Player
