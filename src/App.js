import React from 'react';
import './styles.css';
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
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/ccr" element={<CCR />} />
        <Route path="/contact" element={<Contact />} /> 
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
