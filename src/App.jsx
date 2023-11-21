import './App.css';
import { useEffect, useState } from 'react'

import Hero from './components/HeroSection';
import NavBar from './components/Navbar';
import Section from './components/Section';
import axios from 'axios';

const ENDPOINT='https://qtify-backend-labs.crio.do'
function App() {

  const [topAlbums, setTopAlbums] = useState([])
  const [newAlbums, setNewAlbums] = useState([])

  useEffect(()=>{
    (async()=>{
      const top=await axios.get(`${ENDPOINT}/albums/top`)
      const newAl=await axios.get(`${ENDPOINT}/albums/new`)
      setNewAlbums(newAl.data)
      setTopAlbums(top.data)


    })()
  },[])
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Section title='Top Albums' data={topAlbums}/>
      <Section title='New Albums' data={newAlbums}/>

      {/* <Card/> */}
    </div>
  );
}

export default App;
