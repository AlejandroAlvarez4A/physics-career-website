import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './App.css';
import CardComponent from './components/Card/CardComponent';
import NavbarComponent from './components/Navbar/NavbarComponent';

const App = () => {
  return (
    <div>
      <NavbarComponent />
      <Container>
        <CardComponent />
      </Container>
    </div>
  );
}

export default App;
