import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { useNavigate, useLocation } from 'react-router-dom';

import { ROUTES } from 'constants/constants';

import LanguageFlag from './LanguageFlag';

import styles from './navigation.module.css';

const Navigation = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleBrandClick = () => navigate(ROUTES.home);

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
            onClick={handleBrandClick}
            role="button"
            className={styles.brand}
            onKeyDown={handleBrandClick}
            tabIndex={0}
          >
            AJG
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link
              onClick={() => navigate(ROUTES.about)}
              active={pathname === ROUTES.about}
            >
              About
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate(ROUTES.experience)}
              active={pathname === ROUTES.experience}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate(ROUTES.contact)}
              active={pathname === ROUTES.contact}
            >
              Contact
            </Nav.Link>
            <Nav.Link
              onClick={() => navigate(ROUTES.blog)}
              active={pathname.slice(0, 5) === ROUTES.blog}
            >
              Blog
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
