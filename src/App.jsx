import './App.css';
import React from 'react';
// import Navbar from './Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import { useEffect } from "react";
import Projects from './Pages/Projects';
import Contact from './Component/Contact';
import Credentials from './Pages/Credentials';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Animation arena
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 800,
      offset: 100,
    })
  }, []);

  return (
    <div className="">
      <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/credentials" element={<Credentials />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
