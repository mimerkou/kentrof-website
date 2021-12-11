import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Copyright from './components/Copyright/Copyright';
import Home from './pages/Home/Home';
import WhoWeAre from './pages/WhoWeAre/WhoWeAre';
import WhyCenterF from './pages/WhyCenterF/WhyCenterF';
import OurTeam from './pages/OurTeam/OurTeam';
import Actions from './pages/Actions/Actions';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Sidebar isOpen={isOpen} toggle={toggle} />
        <Navbar toggle={toggle} />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/why-center-f" element={<WhyCenterF />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/actions" element={<Actions />} />
        </Routes>
        <Footer />
        <Copyright />
      </BrowserRouter>
    </>
  );
};

export default App;
