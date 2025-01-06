import { useState } from 'react';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import About from './pages/About';
function App() {
  return (
    <>
      <BrowserRouter basename="/TravelWebsite">
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

