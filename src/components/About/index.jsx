import React from 'react';
import { Row, Col } from 'react-bootstrap';

import aboutFormal from 'images/about_formal.png';

const About = () => {
  return (
    <section id="about">
      <Row>
        <Col md={12}>
          <span className="text-center">
            <h3>About Me <i className="fas fa-angle-up" /></h3>
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={3} xs={12}>
          <img className="img-responsive center-xs" src={aboutFormal} />
        </Col>
        <Col sm={9} xs={12}>
          <p>
            I have over three years of professional experience working with full-stack technologies. I currently work as a Senior Software Engineer
            at Gorilla Logic with React, Ruby on Rails, and MySQL. Although I enjoy seeing the end product, my real passion is for learning and
            conquering new challenges. This philosophy is described eloquently by Allan Watts:
          </p>
          <p>
            “This is the real secret of life -- to be completely engaged with what you are doing in the here and now.
            And instead of calling it work, realize it is play”
          </p>
          <h5>Skills</h5>
          <p><span className="underline">Strong:</span> JavaScript, Java, HTML/CSS, React/Redux, Node
          </p>
          <p><span className="underline">Knowledgable:</span> C, Python
          </p>
        </Col>
      </Row>
    </section>
  );
};

export default About;
