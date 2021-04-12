import React from 'react';
import {
  Route,
  Switch,
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
      <Switch>
        <Route path="/about" component={AboutMe} />
        <Route path="/experience" component={WorkExperience} />
        <Route path="/contact" component={Contact} />
        <Route path="/blog" component={Contact} />
        <Route component={FourOhFourError} />
      </Switch>
      <Footer />
    </Container>
  );
};

export default HomePage;
