import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

function AppNavbar() {
  return (
    <Navbar bg='light' variant='light' expand='lg'>
      <Container fluid>
        <Navbar.Toggle aria-controls='navbar' />
        <Navbar.Collapse id='navbar'>
          <Nav className='ml-auto'>
            <Nav.Link as={Link} to='/'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/resume'>
              Resume
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;