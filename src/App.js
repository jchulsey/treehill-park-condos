import React from 'react';
import './styles/global.scss';
import './styles/nav.scss'
import './styles/styles.scss';
import Navbar from './Navbar';
import Footer from './Footer'
import About from './pages/About';
import CCR from './pages/CCR';
import Home from './pages/Home';
import Contact from  './pages/Contact';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
    <Navbar />
    <Footer />
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/ccr" element={<CCR />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
    </>
  );
}

export default App;
