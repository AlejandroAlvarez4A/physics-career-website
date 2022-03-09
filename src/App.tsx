import React from 'react';
import {Container} from 'react-bootstrap';
import './App.css';
import CardComponent from './components/Card/CardComponent';
import FooterComponent from './components/Footer/FooterComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';

const App = () => {
  return (
    <>
      <NavbarComponent />
      <Container>
        <CardComponent />
        <div>
          <h1>Task</h1>
          <div>
            Eber: completar el home y footer
          </div>
          <div>
            ale: completar el navbar y navegacion
          </div>
        </div>
      </Container>
      <FooterComponent/>
    </>
  );
}

export default App;
