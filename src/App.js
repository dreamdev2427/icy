import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import Component
import Header from './Components/Header';
import Footer from './Components/Footer';
import Presentation from './Components/Presentation';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="u-body u-xl-mode">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Presentation />} exact />
          <Route path="/contact" element={<Contact />} exact />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>

  );
}

export default App;
