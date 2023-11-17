import React from "react";
import { Link } from "react-router-dom";
import logo from "assets/logo_sans_fond.png";
import { FaHome, FaSearch, FaWalking, FaSignInAlt } from "react-icons/fa";



const NavBar  = () => {
  return (
    <>
      <section className="navbar">
        <img
          src={logo} className="navbar__header"alt="logo de l application"/>

        <div className="navbar__navItem">
          <ul className="navbar__list">
            <li className="navbar__item">
              <Link to="/"><FaHome /><span>HOME</span></Link>
            </li>
            <li className="navbar__item">
              <Link to="search"><FaSearch /><span>SEARCH</span>
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="visit"><span>VISIT</span><FaWalking />
              </Link>
            </li>
            <li className="navbar__item">
              <Link to="login"><span>LOGIN</span><FaSignInAlt />
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default NavBar;
