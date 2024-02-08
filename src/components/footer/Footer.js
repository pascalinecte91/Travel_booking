import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Visit from './../visit/Visit';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__social">
        <Link to="lien_vers_facebook"><FaFacebook /></Link>
        <Link to="lien_vers_twitter"><FaTwitter /></Link>
        <Link to="lien_vers_instagram"><FaInstagram /></Link>
      </div>
      <div className="footer__links">
        <Link to="/search">Recherche</Link>
        <Link to="/visitPage">Visit</Link>
        <Link to="/contact">Contact us</Link>
      
      </div>
      <div className="footer__info">
        <p>Pascaline Cte</p>
     
        <p>06 01 23 45 67</p>
        <p>Email: iletaitunefoispmdr@gmail.com</p>
        {/* Ajoutez d'autres informations de contact ou d'entreprise si nécessaire */}
      </div>
    </footer>
  );
};

export default Footer;
