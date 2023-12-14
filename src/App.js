
import React, { lazy, Suspense } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom'; 
import NavBar from "components/navBar/NavBar.js";
import Footer from 'components/footer/Footer.js';
import Error from 'pages/error/Error.jsx';
import "style/index.scss";


// Importation des composants de manière asynchrone avec lazy loading
const HomePage = lazy(() => import("pages/home/HomePage.jsx"))
const Visit = lazy(() => import("pages/visit/VisitPage.jsx"));
const SearchFormPage  = lazy(() => import("pages/search/SearchFormPage.jsx"));
const ContactFormPage = lazy(() => import("pages/form/ContactFormPage.jsx"))
const LoginPage = lazy(() => import  ("pages/auth/LoginPage.jsx"));
const SignUp = lazy(() => import  ("pages/auth/SignUpPage.jsx"));
const ForgottenPasswordPage = lazy(() => import ("pages/forgotten/ForgottenPasswordPage.jsx"));




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
      <Route path="/homePage" element={<HomePage />}/>
      <Route path="/visit" element={<Visit />}/>
      <Route path="/search" element={ <SearchFormPage />}/>
      <Route path="/contact" element={<ContactFormPage /> }/>
      <Route path="/loginPage" element={ <LoginPage />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/forgottenPasswordPage" element={<ForgottenPasswordPage />} />
      <Route path="*" element={<Error />}/>
      </Routes>
      <Footer />
   </Suspense>
    </HashRouter> 
  );
}

export default App;
