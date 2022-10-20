import React from 'react';
import { Container } from 'react-bootstrap';

import Footer from 'components/Footer';

import About from './About';
import Interests from './Interests';

const AboutMe = () => {
  return (
    <Container className="content">
      <About />
      <Interests />
      <Footer />
    </Container>
  );
};

export default AboutMe;
