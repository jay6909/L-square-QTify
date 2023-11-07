import './App.css';
import Card from './components/Card';
import Hero from './components/Hero';
import NavBar from './components/Navbar';
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Hero/>
      <Card/>
    </div>
  );
}

export default App;
