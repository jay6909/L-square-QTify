import React from 'react'
import { ReactComponent as NewEnglishSong } from "./new-english-song.svg";

import './Card.css'
export default () => {
  return (
    <div className='card'>
        <div className='album-img-holder'>
            
            <NewEnglishSong/>
        </div>
        <div className='follow-holder'>
            <button className='follow-button'>100 follows</button>
        </div>
    </div>
  )
}

