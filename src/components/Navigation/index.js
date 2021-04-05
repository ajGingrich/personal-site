import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

import LanguageFlag from './LanguageFlag';

import styles from './navigation.module.css';

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbarCustom}>
      <Container>
        <Navbar.Brand>
          <LanguageFlag />
          AJG
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Portfolio</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="#interests">Interests</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
