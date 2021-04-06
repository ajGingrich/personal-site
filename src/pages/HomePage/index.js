import React from 'react';
import { Container } from 'react-bootstrap';

import Welcome from 'components/Welcome';
import Navigation from 'components/Navigation';
import About from 'components/About';
import Footer from 'components/Footer';
import WorkExperience from 'components/WorkExperience';

import styles from './home-page.module.css';

const HomePage = () => {
  return (
    <div className={styles.background}>
      <Navigation />
      <Welcome />
      <Container className={styles.content}>
        <About />
        <WorkExperience />
        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
