import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Container } from 'react-bootstrap';

import AboutMe from 'pages/AboutMe';
import Footer from 'components/Footer';
import WorkExperience from 'components/WorkExperience';
import Contact from 'components/Contact';
import FourOhFourError from 'components/FourOhFourError';

import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <Container className={styles.content}>
      <Routes>
        <Route path="about" element={<AboutMe />} />
        <Route path="experience" element={<WorkExperience />} />
        <Route path="contact" element={<Contact />} />
        <Route element={<FourOhFourError />} />
      </Routes>
      <Footer />
    </Container>
  );
};

export default HomePage;
