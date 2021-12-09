import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Home from './pages/Home/Home';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
};

export default App;
