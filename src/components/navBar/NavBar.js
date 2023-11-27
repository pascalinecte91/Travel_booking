import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo_sans_fond.png";
import {
  FaSearch,
  FaWalking,
  FaSignInAlt,
  FaEnvelope,
  FaSignOutAlt,
} from "react-icons/fa";

const NavBar = () => {
  return (
    <nav className="navbar">
      {/* Div pour les onglets des pages */}
      <div className="navbar__tabs">
        <img className="navbar__logo" src={logo} alt="Travel Booking Logo" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/home">
              <span>Home</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/visit">
              <span>Visit</span>
              <FaWalking className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/search">
              <span>Search</span>
              <FaSearch className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact">
              <FaEnvelope className="navbar__icon" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Div pour les liens de connexion */}
      <div className="navbar__auth">
        <ul className="navbar__list">
          <li className="navbar__item">
          <NavLink to="/login" className="navbar__item signin">
              <span>Sign In</span>
              <FaSignInAlt className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to="/logout" className="navbar__item signout">
              <span>Sign Up</span>
              <FaSignOutAlt className="navbar__icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
