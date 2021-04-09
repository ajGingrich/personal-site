import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import LanguageFlag from './LanguageFlag';

import styles from './navigation.module.css';

const Navigation = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbarCustom}>
      <Container>
        <Navbar.Brand>
          <LanguageFlag />
          <span
            onClick={() => history.push('/')}
            role="1"
            className={styles.brand}
          >
            AJG
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav.Link href="https://blog.andrewgingrich.com">Blog</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
