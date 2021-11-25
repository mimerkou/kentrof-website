import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
        </Routes> */}
      </BrowserRouter>
    </>
  );
};

export default App;
