import './App.css';
import { useEffect, useState } from 'react'

import Hero from './components/HeroSection';
import NavBar from './components/Navbar';
import Section from './components/Section';
import FilterSection from './components/FilterSection'
import FaqSection from './components/FaqSection';

import axios from 'axios';

const ENDPOINT = 'https://qtify-backend-labs.crio.do'
function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])
  const [songs, setSongs] = useState([])
  const [filteredSongs, setFilteredSongs] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
       axios.get(`${ENDPOINT}/albums/top`).then((res) => {
        setTopAlbums(res.data)
      })
       axios.get(`${ENDPOINT}/albums/new`).then((res) => {
        setNewAlbums(res.data)
      })
       axios.get(`${ENDPOINT}/songs`).then((res) => {
        setSongs(res.data)
        setFilteredSongs(res.data)
      })
       axios.get(`${ENDPOINT}/genres`).then((res) => {
        setGenres([{"key":"all","label":"All"}, ...res.data.data])
      })
  }, [])
  return (
    <div className="App">
      <NavBar topAlbums={topAlbums}/>
      <Hero />
      <Section isAlbum={true} navID='ta' title='Top Albums' data={topAlbums} />
      <Section isAlbum={true} navID='na' title='New Albums' data={newAlbums} />
      <FilterSection isAlbum={false} title='Songs' data={filteredSongs} genres={genres}
      executeFilter={(genre)=>{
        if(genre==='all'){
          setFilteredSongs(songs)
        }
        else{
          setFilteredSongs(songs.filter(song=>song.genre.key===genre))
        }
      }}
      />
      <FaqSection/>

      {/* <Card/> */}
    </div>
  );
}

export default App;
