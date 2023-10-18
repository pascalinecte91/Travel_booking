import './App.css';
import React from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import NavBar from 'components/navBar/NavBar.js';
import HomePage from 'pages/home/HomePage.jsx';

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
    </HashRouter> 
  );
}

export default App;
