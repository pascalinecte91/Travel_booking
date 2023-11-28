
import React, { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import NavBar from "components/navBar/NavBar.js";
import Footer from 'components/footer/Footer.js';
import Error from 'pages/error/Error.jsx';
import "style/index.scss";


// Importation des composants de manière asynchrone avec lazy loading
const HomePage = lazy(() => import("pages/home/HomePage.jsx"))
const Visit = lazy(() => import("pages/visit/Visit.jsx"));
const SearchForm  = lazy(() => import("pages/search/SearchForm.jsx"));
const ContactForm = lazy(() => import("pages/form/ContactFormPage.jsx"))
const Login = lazy(() => import  ("pages/auth/Login.jsx"));
const Logout = lazy(() => import  ("pages/auth/Logout.jsx"));


/**
 * Composant principal de l'application.
 * 
 * @returns {JSX.Element} Le composant React de l'application.
 */

const App = () => {
  return (
    <HashRouter basename='/'> 
   
    <NavBar />
  {/* Contenu principal avec gestion de la suspension pour le chargement asynchrone */}
    <Suspense fallback={null}>
      <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/visit" element={<Visit />}/>
      <Route path="/search" element={ <SearchForm />}/>
      <Route path="/contact" element={<ContactForm /> }/>
      <Route path="/login" element={ <Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
   </Suspense>
    </HashRouter> 
  );
}

export default App;
