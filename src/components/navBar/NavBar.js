import React from 'react';
import { Link } from 'react-router-dom';


const NavBar = () => {
  return (
    <>

    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="search">Search</Link>
        </li>
        <li className="nav-item">
          <Link to="visit">Visit</Link>
        </li>
      </ul>
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
    </>
  );
}

export default NavBar;
