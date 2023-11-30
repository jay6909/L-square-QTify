
import React from 'react'
import SearchBox from '../SearchBox'
import Button from '../Button'
import './Navbar.css'

export default ({topAlbums}) => {
    return <div className='navbar'>
        <div><img src='./QtifyLogo.png'></img></div>
        <SearchBox topAlbums={topAlbums}/>
        <Button>Give Feedback</Button>
    </div>
}