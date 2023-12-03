import React from "react";
import { NavLink } from "react-router-dom";
import logo from "assets/logo_sans_fond.png";
import { FaHome }from "react-icons/fa";
import { MdOutlineTravelExplore } from "react-icons/md";
import { IoIosMail, IoIosLogIn, IoIosSave } from "react-icons/io";



/**
 * @Component de barre de navigation.
 * @returns {JSX.Element} Le composant React de la barre de navigation.
 */

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__tabs">
        <img className="navbar__logo" src={logo} alt="Travel Booking Logo" />
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/homePage">
              <span>Home</span>
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/visitPage">
              <span>Visit</span>
              <FaHome className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/search">
              <span>Search</span>
              <MdOutlineTravelExplore className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/contact">
              <IoIosMail className="navbar__icon" />
              <span>Contact</span>
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="navbar__auth">
        <ul className="navbar__list">
          <li className="navbar__item">
          <NavLink to="/loginPage" className="navbar__item signin">
              <span>Log In</span>
              <IoIosLogIn className="navbar__icon" />
            </NavLink>
          </li>
          <li className="navbar__item">
          <NavLink to="/signUp" className="navbar__item signout">
              <span>Sign Up</span>
              <IoIosSave className="navbar__icon" />
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
