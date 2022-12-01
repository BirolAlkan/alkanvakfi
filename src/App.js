import './App.css';
import Card from './components/Card';
import Footer from './components/Footer';
import Main from './components/Main';
import Navbar from './components/Navbar';
import AlkanVakfı from './pages/AlkanVakfı';
import Hakkımızda from './pages/Hakkımızda';
import Faaliyetlerimiz from './pages/Faaliyetlerimiz';
import Haberler from './pages/Haberler';
import {Routes, Route } from "react-router-dom";


function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<AlkanVakfı />} />
        <Route path="/Hakkımızda" element={<Hakkımızda />} />
        <Route path="/Faaliyetlerimiz" element={<Faaliyetlerimiz />} />
        <Route path="/Haberler" element={<Haberler />} /> 
      </Routes>
      <Main/>
      <Card/>
      <Footer/>
    </div>
  );
}

export default App;
