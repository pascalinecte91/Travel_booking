
import React, { lazy } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import NavBar from 'components/navBar/NavBar.js';
import Footer from 'components/footer/Footer.js';

import "style/index.scss";
const HomePage = lazy(() => import("pages/home/HomePage.jsx"))

const App = () => {
  return (
    <HashRouter basename='/'> 
  
    <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visit" element={<visit />} />
        <Route path="/booking" element={<booking />} />
        <Route path="/search" element={<searchForm />} />
        <Route path="*" element={<error />} />
      </Routes>
      <Footer />
    </HashRouter> 
  );
}

export default App;
