import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import LanguageFlag from './LanguageFlag';

import styles from './navigation.module.css';

const Navigation = () => {
  const navigate = useNavigate();

  // TODO: make it highlighted with the navlink

  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      className={styles.navbarCustom}
      sticky="top"
    >
      <Container>
        <Navbar.Brand>
          <LanguageFlag />
          <span
            onClick={() => navigate('/')}
            role="1"
            className={styles.brand}
          >
            AJG
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link onClick={() => navigate('/about')}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/experience')}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/contact')}>
              Contact
            </Nav.Link>
            <Nav.Link onClick={() => navigate('/blog')}>
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
