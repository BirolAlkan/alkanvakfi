import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import {Routes, Route, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} /> 
        </Routes>
        <Footer/>
      </BrowserRouter>
      
    </div>
  );
}

export default App;