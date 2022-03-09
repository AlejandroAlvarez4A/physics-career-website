import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';


const NavbarComponent = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Container>
			<Navbar.Brand href="#home">carrera de fisica</Navbar.Brand>
			<Nav className="me-auto">
				<Nav.Link href="#home">grado</Nav.Link>
				<Nav.Link href="#features">posgrado</Nav.Link>
				<Nav.Link href="#pricing">investigacion</Nav.Link>
			</Nav>
			</Container>
		</Navbar>
	)
}

export default NavbarComponent;