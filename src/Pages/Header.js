import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="p-2">
      <Container fluid className=' me-2 ms-2'>
        <Navbar.Brand href="#">BISWAJIT'S</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />  
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/')}>Home</Nav.Link>
            <Nav.Link onClick={() => navigate('/settings')}>Settings</Nav.Link>
          </Nav>

      
          <Form className="d-none d-lg-flex" style={{ flex: 1, maxWidth: '300px' }}>
            <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search"/>
            <Button variant="outline-light">
              <FaSearch />
            </Button>
          </Form>

          
          <Form className="d-flex d-lg-none mt-3">
            <FormControl type="search" placeholder="Search"  className="me-2" aria-label="Search" />
            <Button variant="outline-light">
              <FaSearch />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
