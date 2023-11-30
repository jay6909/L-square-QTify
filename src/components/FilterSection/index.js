import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Carousel from '../Carousel'
import './filterSection.css'
export default ({ title, data, genres,executeFilter, isAlbum }) => {

    const [selectedTab, setSelectedTab] = useState(0)

    return (
        <div className="section">
            <h1 className="title"> {title}</h1>
            <Tabs
            value={selectedTab}
            onChange={(e,value)=>{
                executeFilter(genres[value].key)
                setSelectedTab(value)
            }}
            TabIndicatorProps={{
                style:{
                    backgroundColor:'var(--css-primary)'
                }
            }}
            >
                {genres.map(genreItem =>
                    <Tab  className='tab' key={genreItem.key} label={genreItem.label} />
                )}
            </Tabs>
            <Carousel isAlbum={isAlbum} data={data} />
        </div>
    );

}

