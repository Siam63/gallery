import './App.css';
import ImageGallery from './Components/ImageGallery';
import NavBar from './Components/NavBar';
import HomePage from './Components/HomePage';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <Router>
          <Routes>
            <Route path ="/" element={ <HomePage /> }/>
            <Route path="/gallery" element={ <ImageGallery /> }/>
            <Route path="/contact" element={ <Contact /> }/>
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
