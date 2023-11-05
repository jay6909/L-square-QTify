
import React from 'react'
import SearchBox from '../SearchBox'
import Button from '../Button'
import './Navbar.css'

export default () => {
    return <div className='navbar'>
        <div><img src='./QtifyLogo.png'></img></div>
        <SearchBox />
        <Button>Give Feedback</Button>
    </div>
}