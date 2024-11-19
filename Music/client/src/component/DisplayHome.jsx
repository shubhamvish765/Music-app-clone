import React from 'react'
import Navbar from './Navbar'
import { albumsData } from '../assets/assets'
import Album from './Album'
import { songsData } from '../assets/assets'
import SongItem from './SongItem'

function DisplayHome() {
  return (
    <div>
        <Navbar />
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Feature Charts</h1>
            <div className='flex overflow-auto'>
            {albumsData.map((item,index)=>(<Album key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}
            </div>  
        </div>
        <div className='mb-4'>
            <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
            <div className='flex overflow-auto'>
            {songsData.map((item,index)=>(<SongItem key={index} name={item.name} desc={item.desc} id={item.id} image={item.image}/>))}  
            </div>  
        </div>
    </div>
  )
}

export default DisplayHome