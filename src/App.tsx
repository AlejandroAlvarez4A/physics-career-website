import React from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import FooterComponent from './components/Footer/FooterComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <HomePage />
      <FooterComponent />
    </>
  );
}

export default App;
