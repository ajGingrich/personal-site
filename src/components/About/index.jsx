import React from 'react';
import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section id="about">
      <Row>
        <Col md={12}>
          <div className="text-center">
            <p>About Me</p>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default About;
